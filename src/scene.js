import { allDrawableObjects, RectangularSprite, Vector } from "./dynamics.js";
import { BACKGROUND_LAYER, PLAYER_LAYER } from "./layers.js";

export class Scene {
    constructor(canvas, background, spawnPoint, player) {
        new RectangularSprite(background, canvas.width, canvas.height, new Vector(0, 0), BACKGROUND_LAYER);
        this.spawnPoint = spawnPoint;
        this.canvas = canvas;
        this.player = player;
    }

    reset() {
        allDrawableObjects.forEach((_, index) => {
            if (index !== PLAYER_LAYER) {
                allDrawableObjects[index] = []
            }
        })
    }

    loadScene(NewScene) {
        this.reset();
        const newScene = new NewScene(this.canvas, this.player);
        this.player.position = newScene.spawnPoint;
    }
}