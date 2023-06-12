import { RectangularSprite, Vector } from "./dynamics.js";
import { BACKGROUND_LAYER } from "./layers.js";

export class Scene {
    constructor(canvas, background, spawnPoint) {
        new RectangularSprite(background, canvas.width, canvas.height, new Vector(0, 0), BACKGROUND_LAYER);
        this.spawnPoint = spawnPoint;
    }
}