import { Box, CircularSprite, RectangularSprite, Vector } from "./dynamics.js";
import { PLAYER_LAYER } from "./layers.js";

export class Player extends CircularSprite {
    speed = 200;

    constructor(position) {
        let img = new Image();
        img.src = "assets/sprite.png";
        super(img, 38, position, PLAYER_LAYER, 0.7, 0.7);

        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);

        this.triggerCollider = new Box(40, 40, new Vector(0, 0), PLAYER_LAYER, null, null, false);
        //this.RectangularSprite(img, 40,20, new Vector(0,0), PLAYER_LAYER, null, null, true);


    }

    update(elapsed) {
        let movement = new Vector(0, 0);
        if (this.speedsRight) {
            movement.x += 1;
        }
        if (this.speedsLeft) {
            movement.x -= 1;
        }
        if (this.speedsUp) {
            movement.y -= 1;
        }
        if (this.speedsDown) {
            movement.y += 1;
        }
        movement.normalize();
        movement.mult(elapsed);
        movement.mult(this.speed);
        this.position.add(movement);

        let triggerColliderPosition = new Vector(this.position.x, this.position.y);
        triggerColliderPosition.subtract(new Vector(20, 20));
        this.triggerCollider.position = triggerColliderPosition;

        //let RectangularSpritePosition = new Vector(this.position.x, this.position.y);
        //RectangularSpritePosition.subtract(new Vector(20,20));
        //this.RectangularSpritePosition.position = RectangularSpritePosition;
    }

    handleKeydown(event) {
        let key = event.key || event.keyCode;
        let hasHandled = true;
        switch (key) {
            case "s": case "ArrowDown":
                this.speedsDown = true;
                break;
            case "w": case "ArrowUp":
                this.speedsUp = true;
                break;
            case "a": case "ArrowLeft":
                this.speedsLeft = true;
                break;
            case "d": case "ArrowRight":
                this.speedsRight = true;
                break;
            case "Enter":
                // "enter" bzw. "return"
                break;
            case "Escape":
                // "esc"
                break;
            default: //jede andere Taste
                hasHandled = false;
        }
        if (hasHandled) event.preventDefault();
    };

    handleKeyup(event) {
        let key = event.key || event.keyCode;
        let hasHandled = true;
        switch (key) {
            case "s": case "ArrowDown":
                this.speedsDown = false;
                break;
            case "w": case "ArrowUp":
                this.speedsUp = false;
                break;
            case "a": case "ArrowLeft":
                this.speedsLeft = false;
                break;
            case "d": case "ArrowRight":
                this.speedsRight = false;
                break;
            case "Enter":
                // "enter" bzw. "return"
                break;
            case "Escape":
                // "esc"
                break;
            default: //jede andere Taste
                hasHandled = false;
        }
        if (hasHandled) event.preventDefault();
    };
}