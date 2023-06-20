import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { Enemy } from "../enemy.js";
import { DYNAMIC_LAYER, FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { AutumnScene } from "./autumn_scene.js";
import { HSpawnScene } from "./Hspawn_scene.js";
import { LookoutScene } from "./lookout_scene.js";
import { PentagramScene } from "./pentagram_scene.js";
import { SlopyShitScene } from "./slopyshit_scene.js";
import { SpawnScene } from "./spawn_scene.js";

export class RelicsScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/Relics.png"
        super(canvas, img, [new Vector(451, 486)], player)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(7, 146, new Vector(390, 394), OBSTACLE_LAYER, null, null, false);
        new Box(390, 6, new Vector(0, 394), OBSTACLE_LAYER, null, null, false);
        new Box(34, 22, new Vector(213, 379), OBSTACLE_LAYER, null, null, false);
        new Box(34, 22, new Vector(99, 379), OBSTACLE_LAYER, null, null, false);
        new Box(7, 146, new Vector(563, 394), OBSTACLE_LAYER, null, null, false);
        new Box(390, 6, new Vector(570, 394), OBSTACLE_LAYER, null, null, false);
        new Box(34, 22, new Vector(713, 379), OBSTACLE_LAYER, null, null, false);
        new Box(399, 121, new Vector(0, 181), OBSTACLE_LAYER, null, null, false);
        new Box(396, 121, new Vector(564, 181), OBSTACLE_LAYER, null, null, false);
        new Box(202, 120, new Vector(381, 73), OBSTACLE_LAYER, null, null, false);
        new Box(126, 12, new Vector(424, 214), OBSTACLE_LAYER, null, null, false);
        new Box(28, 12, new Vector(396, 226), OBSTACLE_LAYER, null, null, false);
        new Box(28, 12, new Vector(533, 226), OBSTACLE_LAYER, null, null, false);
        new Box(28, 12, new Vector(382, 238), OBSTACLE_LAYER, null, null, false);
        new Box(28, 12, new Vector(552, 238), OBSTACLE_LAYER, null, null, false);
        new Box(28, 12, new Vector(373, 250), OBSTACLE_LAYER, null, null, false);
        new Box(28, 12, new Vector(561, 250), OBSTACLE_LAYER, null, null, false);

        new Enemy(new Vector(200, 350), () => {
            this.loadScene(SpawnScene, 0)
        });

        new Trigger(158, 3, new Vector(405, 537), () => {
            console.log("HEHE");
            this.loadScene(AutumnScene, 1);
        }, true);

        new Trigger(65, 45, new Vector(450, 228), () => {
            console.log("HEHE");
            this.loadScene(HSpawnScene, 0);
        }, true);
    }
}