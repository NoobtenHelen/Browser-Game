//Funktionen für 2D-Vektoren
export class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	add(other) {
		this.x += other.x;
		this.y += other.y;
	}
	subtract(other) {
		this.x -= other.x;
		this.y -= other.y;
	}
	mult(scalar) {
		this.x *= scalar;
		this.y *= scalar;
	}
	addLinear(other, scalar) {
		this.x += scalar * other.x;
		this.y += scalar * other.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	normalize() {
		if (this.length() === 0) return;
		this.mult(1.0 / this.length());
	}
	scalarProduct(other) {
		return this.x * other.x + this.y * other.y;
	}
	static connecting(a, b) {
		return new Vector(b.x - a.x, b.y - a.y);
	}
}

export let allDrawableObjects = [];

// function addToLayer(layer) {

// }
// ist identisch zu:

export const addToLayer = (layer, object) => {
	if (allDrawableObjects[layer]) {
		allDrawableObjects[layer].push(object);
	} else {
		allDrawableObjects[layer] = [object];
	}
}

//Modell einer Punktmasse
export class Particle {
	constructor(position, velocity = new Vector(0, 0), mass = 1) {
		this.position = position;
		this.velocity = velocity;
		this.mass = mass;
	}
	//Newtons Bewegungsgesetz
	move(time, acceleration = new Vector(0, 0)) {
		this.velocity.addLinear(acceleration, time);
		this.position.addLinear(this.velocity, time);
	}
	distance(other) {
		return Vector.connecting(this.position, other.position).length();
	}
}

//Modell eines ausgedehnten Balls mit Kollisionsabfrage;
//Masse bislang noch nicht implementiert!
export class Ball extends Particle {
	constructor(radius, position, layer, velocity, mass) {
		super(position, velocity, mass);
		this.radius = radius;
		this.layer = layer;
		this.color = "black";
		addToLayer(layer, this);
	}
	distance(other) {
		return super.distance(other) - this.radius - other.radius;
	}
	collidesWith(other) {
		return (this.distance(other) <= 0);
	}
	//elastische Kollision nur für identische Massen!
	exchangeElasticImpulseWith(other) {
		let contactNormal = Vector.connecting(this.position, other.position);
		contactNormal.normalize();
		//resolve interpenetration
		let depth = this.distance(other);
		if (depth < 0) {
			depth *= -0.5;
			other.position.addLinear(contactNormal, depth);
			this.position.addLinear(contactNormal, -1.0 * depth);
		}
		//exchange impulse in elastic collision
		let diff = this.velocity.scalarProduct(contactNormal)
			- other.velocity.scalarProduct(contactNormal);
		contactNormal.mult(diff);
		this.velocity.subtract(contactNormal);
		other.velocity.add(contactNormal);
	}
	draw(context) {
		context.fillStyle = this.color;
		context.beginPath();
		context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
		context.closePath();
		context.fill();
	}
}


export class Box extends Particle {
	constructor(width, height, position, layer, velocity, mass, visible = true) {
		super(position, velocity, mass);
		this.width = width;
		this.height = height;
		this.layer = layer;
		this.color = "black";
		this.visible = visible;
		addToLayer(layer, this)
	}
	//signed pseudo-distance to other box in x-direction
	distX(other) {
		return (this.position.x - (other.position.x + other.width))
			* ((this.position.x + this.width) - other.position.x);
	}
	//signed pseudo-distance to other box in y-direction
	distY(other) {
		return (this.position.y - (other.position.y + other.height))
			* ((this.position.y + this.height) - other.position.y);
	}
	//collision detection with other box
	collidesWith(other) {
		return (this.distX(other) < 0 && this.distY(other) < 0);
	}
	reflectBall(ball, damping = 1, friction = 1) {
		let nearestPoint = new Vector(0, 0);
		let relativeCenter = Vector.connecting(this.position, ball.position);
		if (relativeCenter.x > 0) nearestPoint.x = relativeCenter.x;
		if (nearestPoint.x > this.width) nearestPoint.x = this.width;
		if (relativeCenter.y > 0) nearestPoint.y = relativeCenter.y;
		if (nearestPoint.y > this.height) nearestPoint.y = this.height;
		let contactNormal = Vector.connecting(nearestPoint, relativeCenter);
		let depth = ball.radius - contactNormal.length();
		if (depth >= 0) {
			contactNormal.normalize();
			ball.position.addLinear(contactNormal, depth);
			let normalVelocity = ball.velocity.scalarProduct(contactNormal);
			let contactTangent = new Vector(contactNormal.y, -contactNormal.x);
			let tangentVelocity = ball.velocity.scalarProduct(contactTangent);
			ball.velocity.addLinear(contactNormal, -(1.0 + damping) * normalVelocity);
			ball.velocity.addLinear(contactTangent, (friction - 1.0) * tangentVelocity);
			return true
		} else {
			return false;
		}
	}
	reflectBox(box, damping = 1, friction = 1) {
		//for boxes colliding from above
		if (box.position.x + box.width * 0.6 > this.position.x &&
			box.position.x + box.width * 0.4 < this.position.x + this.width &&
			box.position.y < this.position.y &&
			box.position.y > this.position.y - box.height) {
			box.position.y = this.position.y - box.height;
			box.velocity.y *= -damping;
			box.velocity.x *= friction;
			if (typeof box.jumps !== "undefined") box.jumps = false;
			return true;
		}
		//for boxes colliding from below
		else if (box.position.x + box.width * 0.6 > this.position.x &&
			box.position.x + box.width * 0.4 < this.position.x + this.width &&
			box.position.y > this.position.y &&
			box.position.y < this.position.y + this.height) {
			box.position.y = this.position.y + this.height;
			box.velocity.y *= -damping;
			box.velocity.x *= friction;
			return true;
		}
		//for boxes colliding from the left
		else if (box.position.y + box.height * 0.5 > this.position.y &&
			box.position.y + box.height * 0.5 < this.position.y + this.height &&
			box.position.x < this.position.x &&
			box.position.x > this.position.x - box.width) {
			box.position.x = this.position.x - box.width;
			box.velocity.x *= -damping;
			box.velocity.y *= friction;
			return true;
		}
		//for boxes colliding from the right
		else if (box.position.y + box.height * 0.5 > this.position.y &&
			box.position.y + box.height * 0.5 < this.position.y + this.height &&
			box.position.x > this.position.x &&
			box.position.x < this.position.x + this.width) {
			box.position.x = this.position.x + this.width;
			box.velocity.x *= -damping;
			box.velocity.y *= friction;
			return true;
		} else {
			return false;
		}
	}
	draw(context) {
		if (this.visible) {
			context.fillStyle = this.color;
			context.fillRect(this.position.x, this.position.y, this.width, this.height);
		}
	}
}

export class CircularSprite extends Ball {
	constructor(img, radius, position, layer, scaleX = 1, scaleY = 1, visible = true) {
		super(radius, position, layer);
		this.img = img;
		this.scaleX = scaleX;
		this.scaleY = scaleY;
		this.visible = visible;
	}
	draw(context, lineWidth = 0) {
		if (this.visible) {
			try {
				context.drawImage(this.img,
					this.position.x - this.img.width * this.scaleX * 0.5,
					this.position.y - this.img.height * this.scaleY * 0.5,
					this.img.width * this.scaleX,
					this.img.height * this.scaleY);
			} catch (err) {
				context.fillStyle = this.color;
				context.beginPath();
				context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
				context.closePath();
				context.fill();
			}
		}
		if (lineWidth > 0) {
			context.lineWidth = lineWidth;
			context.strokeStyle = this.color;
			context.beginPath();
			context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
			context.closePath();
			context.stroke();
		}
	}
}

export class RectangularSprite extends Box {
	constructor(img, width, height, position, layer, visible = true) {
		super(width, height, position, layer);
		this.img = img;
		this.visible = visible;
	}
	draw(context, lineWidth = 0) {
		if (this.visible) {
			try {
				context.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
			} catch (err) {
				context.fillStyle = this.color;
				context.fillRect(this.position.x, this.position.y, this.width, this.height);
			}
		}
		if (lineWidth > 0) {
			context.lineWidth = lineWidth;
			context.strokeStyle = this.color;
			context.strokeRect(this.position.x, this.position.y, this.width, this.height);

		}
	}
}