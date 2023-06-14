import { Ball, Box, RectangularSprite, Vector } from "./dynamics.js";
import { PLAYER_LAYER } from "./layers.js";

export class Enemy extends Ball {
    speed = 200;

    constructor(position) {
        let img = new Image();
        img.src = "assets/spawn/enemy_spawn_test_1.png";
        super(19, position, PLAYER_LAYER, new Vector(0, 0), null, false);

        this.triggerCollider = new Box(50, 50, new Vector(0, 0), PLAYER_LAYER, null, null, false);
        this.sprite = new RectangularSprite(img, 76, 76, new Vector(0, 0), PLAYER_LAYER);
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
        triggerColliderPosition.subtract(new Vector(25, 36));
        this.triggerCollider.position = triggerColliderPosition;

        
    }
}