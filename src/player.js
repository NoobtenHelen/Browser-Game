import { Ball, Box, RectangularSprite, Vector } from "./dynamics.js";
import { PLAYER_LAYER } from "./layers.js";

export class Player extends Ball {
    speed = 400;

    constructor(position) {
        let img = new Image();
        img.src = "assets/sprite.png";
        super(19, position, PLAYER_LAYER, new Vector(0, 0), null, false);

        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);

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

        let rectangularSpritePosition = new Vector(this.position.x, this.position.y);
        rectangularSpritePosition.subtract(new Vector(38, 38 + 19));
        this.sprite.position = rectangularSpritePosition;
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