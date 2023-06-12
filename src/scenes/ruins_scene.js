import { Box, Vector } from "../dynamics.js";
import { OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";

export class RuinsScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/Ruins.png"
        super(canvas, img, new Vector(500, 50))

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER); 3

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(440, 195, new Vector(0, 0), OBSTACLE_LAYER, null, null, false);
        new Box(canvas.width, 20, new Vector(0, 345), OBSTACLE_LAYER, null, null, false);
        new Box(90, 35, new Vector(515, 300), OBSTACLE_LAYER, null, null, false);
        new Box(300, 195, new Vector(610, 0), OBSTACLE_LAYER, null, null, false);
        new Box(300, 195, new Vector(670, 150), OBSTACLE_LAYER, null, null, false);

        // Example Trigger
        new Trigger(50, 50, new Vector(400, 200), () => {
            console.log("HEHE");
        }, false);
    }
}