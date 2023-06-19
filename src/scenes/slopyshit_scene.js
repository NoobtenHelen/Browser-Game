import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { DYNAMIC_LAYER, FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { LookoutScene } from "./lookout_scene.js";
import { RuinsScene } from "./ruins_scene.js";
import { WaterfallScene } from "./waterfall_scene.js";


export class SlopyShitScene extends Scene {
    constructor(canvas, player, enemy) {
        const img = new Image;
        img.src = "assets/backgrounds/Slopyshit.png"
        super(canvas, img, [new Vector(616, 461), new Vector(903,433), new Vector(562,55)], player, enemy)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(13, 133, new Vector(713, 407), OBSTACLE_LAYER, null, null, false);
        new Box(17, 92, new Vector(566, 448), OBSTACLE_LAYER, null, null, false);
        new Box(24, 26, new Vector(197, 478), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(558, 435), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(549, 422), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(539, 409), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(531, 396), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(524, 383), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(516, 370), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(508, 357), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(500, 344), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(493, 331), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(488, 318), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(480, 305), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(472, 292), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(464, 279), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(463, 266), OBSTACLE_LAYER, null, null, false);
        new Box(14, 11, new Vector(707, 396), OBSTACLE_LAYER, null, null, false);
        new Box(14, 11, new Vector(697, 385), OBSTACLE_LAYER, null, null, false);
        new Box(14, 11, new Vector(689, 374), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(684, 361), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(675, 348), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(668, 335), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(660, 322), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(653, 309), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(646, 296), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(638, 283), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(631, 270), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(624, 257), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(614, 244), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(600, 231), OBSTACLE_LAYER, null, null, false);
        new Box(21, 78, new Vector(599, 144), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(634, 108), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(628, 121), OBSTACLE_LAYER, null, null, false);
        new Box(20, 13, new Vector(616, 134), OBSTACLE_LAYER, null, null, false);
        new Box(71, 20, new Vector(638, 88), OBSTACLE_LAYER, null, null, false);
        new Box(20, 88, new Vector(633, 0), OBSTACLE_LAYER, null, null, false);
        new Box(120, 75, new Vector(317, 211), OBSTACLE_LAYER, null, null, false);
        new Box(91, 78, new Vector(226, 211), OBSTACLE_LAYER, null, null, false);
        new Box(52, 51, new Vector(0, 489), OBSTACLE_LAYER, null, null, false);
        new Box(24, 26, new Vector(0, 463), OBSTACLE_LAYER, null, null, false);
        new Box(30, 24, new Vector(52, 516), OBSTACLE_LAYER, null, null, false);
        new Box(13, 12, new Vector(82, 528), OBSTACLE_LAYER, null, null, false);
        new Box(16, 15, new Vector(52, 501), OBSTACLE_LAYER, null, null, false);
        new Box(15, 15, new Vector(24, 474), OBSTACLE_LAYER, null, null, false);
        new Box(84, 35, new Vector(21, 396), OBSTACLE_LAYER, null, null, false);
        

















        



        const img_halftree = new Image;
        img_halftree.src = "assets/slopyshit/tree_slopy_1.png";

        let halftree = new RectangularSprite(img_halftree, 103, 291, new Vector(0, 0), DYNAMIC_LAYER, true);
        halftree.pivot = new Vector(67, 227);
        

        const img_tree_slopy = new Image;
        img_tree_slopy.src = "assets/slopyshit/baum_slopy_1.png";

        let baum = new RectangularSprite(img_tree_slopy, 231, 185, new Vector(93, 318), DYNAMIC_LAYER, true);
        baum.pivot = new Vector(172, 476);

        const img_bigbaum = new Image;
        img_bigbaum.src = "assets/slopyshit/bigbaum_slopy_1.png";

        new RectangularSprite(img_bigbaum, 259, 269, new Vector(204, 0), FOREGROUND_LAYER, true);

        const img_blätter = new Image;
        img_blätter.src = "assets/slopyshit/blätter_slopy_1.png";

        new RectangularSprite(img_blätter, 215, 112, new Vector(463, 0), FOREGROUND_LAYER, true);

        const img_stonecolumn = new Image;
        img_stonecolumn.src = "assets/slopyshit/stonecolumn_slopy_1.png";

        new RectangularSprite(img_stonecolumn, 160, 200, new Vector(720, 315), FOREGROUND_LAYER, true);


        // RuinsScene
        new Trigger(130, 4, new Vector(583, 536), () => {
            console.log("HEHE");
            this.loadScene(RuinsScene, 2);
        }, true);

        //LookoutScene
        new Trigger(2, 70, new Vector(957, 437), () => {
            console.log("HEHE");
            this.loadScene(LookoutScene, 0);
        }, false);

        //Autumn
        new Trigger(120, 3, new Vector(513, 11), () => {
            console.log("HEHE");
            this.loadScene(WaterfallScene, 0);
        }, false);

        
        new Trigger(73, 3, new Vector(29, 0), () => {
            console.log("HEHE");
            this.loadScene(WaterfallScene, 0);
        }, false);

    }
}