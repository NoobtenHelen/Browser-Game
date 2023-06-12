import { CircularSprite, Vector } from "./dynamics.js";
import { PLAYER_LAYER } from "./layers.js";

export class Player extends CircularSprite {
    speed = 200;

    constructor(position) {
        let img = new Image();
        img.src = "assets/sprite.png";
        super(img, 38, position, PLAYER_LAYER);

        this.handleKeydown = this.handleKeydown.bind(this);
        this.handleKeyup = this.handleKeyup.bind(this);
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