import { Ball, RectangularSprite, Vector } from "./dynamics.js";
import { ENEMY_LAYER } from "./layers.js";
import { Trigger } from "./trigger.js";

export class Enemy extends Ball {
    speed = 100;
    isChasingPlayer = false;
    randomDirection = new Vector(0.4, 0.2)

    constructor(position) {
        let img = new Image();
        img.src = "assets/BURNING_SHEEP.png";
        super(19, position, ENEMY_LAYER, new Vector(0, 0), null, false);

        //this.triggerCollider = new Box(50, 50, new Vector(0, 0), PLAYER_LAYER, null, null, false);
        this.sprite = new RectangularSprite(img, 76, 76, new Vector(0, 0), ENEMY_LAYER, true);
        this.searchRadius = new Trigger(300, 300, new Vector(0, 0), () => {
            this.isChasingPlayer = true
        }, () => {
            this.isChasingPlayer = false
        }, false);

        setInterval(() => {
            this.randomDirection.x = Math.random() * 2 - 1;
            this.randomDirection.y = Math.random() * 2 - 1;
            this.randomDirection.mult(this.speed / 4);
        }, 500)
    }

    update(elapsed, player) {
        if (this.isChasingPlayer) {
            let playerPosition = new Vector(player.position.x, player.position.y);
            playerPosition.subtract(this.position);
            playerPosition.normalize();
            playerPosition.mult(elapsed);
            playerPosition.mult(this.speed);
            this.position.add(playerPosition);
        } else {
            this.position.add(new Vector(this.randomDirection.x * elapsed, this.randomDirection.y * elapsed));
        }

        //let triggerColliderPosition = new Vector(this.position.x, this.position.y);
        //triggerColliderPosition.subtract(new Vector(25, 36));
        //this.triggerCollider.position = triggerColliderPosition;

        let rectangularSpritePosition = new Vector(this.position.x, this.position.y);
        rectangularSpritePosition.subtract(new Vector(38, 38 + 19));
        this.sprite.position = rectangularSpritePosition;

        let searchRadiusPosition = new Vector(this.position.x, this.position.y);
        searchRadiusPosition.subtract(new Vector(150, 165));
        this.searchRadius.position = searchRadiusPosition;
    }
}