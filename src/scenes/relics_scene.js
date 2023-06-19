import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { DYNAMIC_LAYER, FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { AutumnScene } from "./autumn_scene.js";
import { LookoutScene } from "./lookout_scene.js";
import { PentagramScene } from "./pentagram_scene.js";
import { SlopyShitScene } from "./slopyshit_scene.js";
import { SpawnScene } from "./spawn_scene.js";

export class RelicsScene extends Scene {
    constructor(canvas, player, enemy) {
        const img = new Image;
        img.src = "assets/backgrounds/Relics.png"
        super(canvas, img, [new Vector(451, 486)], player, enemy)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(7, 146, new Vector(390, 394), OBSTACLE_LAYER, null, null, false);
        new Box(390, 6, new Vector(0, 394), OBSTACLE_LAYER, null, null, false);
        new Box(7, 146, new Vector(390, 394), OBSTACLE_LAYER, null, null, false);


        





        new Trigger(158, 2, new Vector(401, 538), () => {
            console.log("HEHE");
            this.loadScene(AutumnScene, 1);
        }, true);
    }
}