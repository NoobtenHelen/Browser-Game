import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { DYNAMIC_LAYER, FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { HPentagramScene } from "./Hpentagram_scene.js";
import { HSlopyShitScene } from "./Hslopyshit_scene.js";
import { LookoutScene } from "./lookout_scene.js";
import { PentagramScene } from "./pentagram_scene.js";
import { SlopyShitScene } from "./slopyshit_scene.js";
import { SpawnScene } from "./spawn_scene.js";

export class HWaterfallScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/HWaterfall.png"
        super(canvas, img, [new Vector(764, 446), new Vector(675, 52)], player)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(166, 302, new Vector(794, 0), OBSTACLE_LAYER, null, null, false);
        new Box(48, 80, new Vector(778, 0), OBSTACLE_LAYER, null, null, false);
        new Box(55, 174, new Vector(774, 77), OBSTACLE_LAYER, null, null, false);
        new Box(115, 181, new Vector(537, 80), OBSTACLE_LAYER, null, null, false);
        new Box(124, 31, new Vector(836, 410), OBSTACLE_LAYER, null, null, false);
        new Box(75, 108, new Vector(624, 432), OBSTACLE_LAYER, null, null, false);
        new Box(75, 38, new Vector(523, 414), OBSTACLE_LAYER, null, null, false);
        new Box(26, 28, new Vector(598, 424), OBSTACLE_LAYER, null, null, false);
        new Box(75, 38, new Vector(448, 402), OBSTACLE_LAYER, null, null, false);
        new Box(75, 38, new Vector(523, 414), OBSTACLE_LAYER, null, null, false);
        new Box(19, 23, new Vector(491, 379), OBSTACLE_LAYER, null, null, false);
        new Box(19, 23, new Vector(474, 356), OBSTACLE_LAYER, null, null, false);
        new Box(21, 15, new Vector(454, 341), OBSTACLE_LAYER, null, null, false);
        new Box(26, 15, new Vector(436, 326), OBSTACLE_LAYER, null, null, false);
        new Box(25, 15, new Vector(433, 311), OBSTACLE_LAYER, null, null, false);
        new Box(14, 15, new Vector(433, 296), OBSTACLE_LAYER, null, null, false);
        new Box(187, 21, new Vector(410, 255), OBSTACLE_LAYER, null, null, false);
        new Box(39, 6, new Vector(576, 261), OBSTACLE_LAYER, null, null, false);
        new Box(60, 80, new Vector(590, 0), OBSTACLE_LAYER, null, null, false);



        const img_bridge = new Image;
        img_bridge.src = "assets/waterfall/Ruintree_HWaterfall_1.png";

        new RectangularSprite(img_bridge, 233, 155, new Vector(600, 0), FOREGROUND_LAYER, true);



        new Trigger(183, 3, new Vector(803, 537), () => {
            console.log("HEHE");
            this.loadScene(HSlopyShitScene, 3);
        }, true);

        new Trigger(99, 2, new Vector(689, 0), () => {
            console.log("HEHE");
            this.loadScene(HPentagramScene, 0);
        }, true);

    }
}