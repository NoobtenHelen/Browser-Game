import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";

export class SpawnScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/Spawn.png"
        super(canvas, img, new Vector(207, 253))

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER); 

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        
        new Box(canvas.width, 20, new Vector(0, 395), OBSTACLE_LAYER, null, null, false);
        new Box(canvas.width, 100, new Vector(0, 0), OBSTACLE_LAYER, null, null, false);
        new Box(70, 230, new Vector(0, 0), OBSTACLE_LAYER, null, null, false);
        new Box(100, 165, new Vector(510, 0), OBSTACLE_LAYER, null, null, false);


        new Trigger(16, 270, new Vector(950, 0), () => {
            console.log("HEHE");
            //change Backround to next scene
            //change Position
        }, true);
    }
}