import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { AutumnScene } from "./autumn_scene.js";
import { HWaterfallScene } from "./Hwaterfall_scene.js";
import { SpawnScene } from "./spawn_scene.js";
import { WaterfallScene } from "./waterfall_scene.js";

export class HPentagramScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/HPentagram.png"
        super(canvas, img, [new Vector(504, 480), new Vector(462, 66)], player)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";


        new Box(17, 540, new Vector(256, 0), OBSTACLE_LAYER, null, null, false);
        new Box(28, 127, new Vector(255, 413), OBSTACLE_LAYER, null, null, false);
        new Box(18, 540, new Vector(698, 0), OBSTACLE_LAYER, null, null, false);
        new Box(45, 71, new Vector(688, 469), OBSTACLE_LAYER, null, null, false);
        new Box(155, 98, new Vector(561, 0), OBSTACLE_LAYER, null, null, false);
        new Box(152, 98, new Vector(247, 0), OBSTACLE_LAYER, null, null, false);
        new Box(26, 72, new Vector(335, 64), OBSTACLE_LAYER, null, null, false);




        const img_blätter_p = new Image;
        img_blätter_p.src = "assets/pentagram/Trees_HPentagram_1.png";

        new RectangularSprite(img_blätter_p, 501, 140, new Vector(238, 400), FOREGROUND_LAYER, true);

        const img_stone = new Image;
        img_stone.src = "assets/pentagram/Rock_HPentagram_1.png";

        new RectangularSprite(img_stone, 54, 69, new Vector(641, 379), OBSTACLE_LAYER, true);

        new Trigger(161, 2, new Vector(399, 0), () => {
            console.log("HEHE");
            this.loadScene(AutumnScene, 2);
        }, true);

        new Trigger(220, 2, new Vector(393, 537), () => {
            console.log("HEHE");
            this.loadScene(HWaterfallScene, 1);
        }, true);


    }
}