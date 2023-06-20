import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { DYNAMIC_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { RuinsScene } from "./ruins_scene.js";
import { SlopyShitScene } from "./slopyshit_scene.js";

export class LookoutScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/Lookout.png"
        super(canvas, img, [new Vector(33, 108), new Vector(28, 458)], player)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(960, 30, new Vector(0, 0), OBSTACLE_LAYER, null, null, false);
        new Box(9, 540, new Vector(485, 0), OBSTACLE_LAYER, null, null, false);
        new Box(92, 369, new Vector(393, 0), OBSTACLE_LAYER, null, null, false);
        new Box(154, 148, new Vector(239, 0), OBSTACLE_LAYER, null, null, false);

        new Box(34, 130, new Vector(205, 0), OBSTACLE_LAYER, null, null, false);
        new Box(34, 115, new Vector(171, 0), OBSTACLE_LAYER, null, null, false);
        new Box(34, 100, new Vector(137, 0), OBSTACLE_LAYER, null, null, false);
        new Box(34, 85, new Vector(103, 0), OBSTACLE_LAYER, null, null, false);
        new Box(34, 70, new Vector(69, 0), OBSTACLE_LAYER, null, null, false);
        new Box(34, 55, new Vector(35, 0), OBSTACLE_LAYER, null, null, false);
        new Box(35, 40, new Vector(0, 0), OBSTACLE_LAYER, null, null, false);

        new Box(34, 130, new Vector(0, 142), OBSTACLE_LAYER, null, null, false);
        new Box(34, 116, new Vector(34, 157), OBSTACLE_LAYER, null, null, false);
        new Box(34, 102, new Vector(68, 170), OBSTACLE_LAYER, null, null, false);
        new Box(34, 85, new Vector(102, 187), OBSTACLE_LAYER, null, null, false);
        new Box(34, 56, new Vector(170, 216), OBSTACLE_LAYER, null, null, false);
        new Box(34, 41, new Vector(204, 231), OBSTACLE_LAYER, null, null, false);
        new Box(34, 71, new Vector(136, 201), OBSTACLE_LAYER, null, null, false);


        new Box(15, 172, new Vector(238, 231), OBSTACLE_LAYER, null, null, false);
        new Box(14, 160, new Vector(380, 243), OBSTACLE_LAYER, null, null, false);
        new Box(9, 83, new Vector(385, 160), OBSTACLE_LAYER, null, null, false);
        new Box(39, 26, new Vector(48, 417), OBSTACLE_LAYER, null, null, false);
        new Box(554, 5, new Vector(0, 522), OBSTACLE_LAYER, null, null, false);
        new Box(15, 9, new Vector(447, 434), OBSTACLE_LAYER, null, null, false);
        new Box(83, 110, new Vector(157, 239), OBSTACLE_LAYER, null, null, false);

        const img_baum = new Image;
        img_baum.src = "assets/lookout/baum_lookout_1.png";

        let baum = new RectangularSprite(img_baum, 185, 185, new Vector(0, 258), DYNAMIC_LAYER, true);
        baum.pivot = new Vector(79, 423)

        const img_bush_lookout = new Image;
        img_bush_lookout.src = "assets/lookout/bush_lookout_1.png";

        let bush_lookout = new RectangularSprite(img_bush_lookout, 67, 71, new Vector(423, 377), DYNAMIC_LAYER, true);
        bush_lookout.pivot = new Vector(453, 431)




        new Trigger(2, 81, new Vector(0, 437), () => {
            console.log("HEHE");
            this.loadScene(RuinsScene, 1);
        }, false);

        new Trigger(2, 64, new Vector(0, 58), () => {
            console.log("HEHE");
            this.loadScene(SlopyShitScene, 1);
        }, false);
    }
}