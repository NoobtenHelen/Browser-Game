import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { DYNAMIC_LAYER, FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { LookoutScene } from "./lookout_scene.js";
import { PentagramScene } from "./pentagram_scene.js";
import { RelicsScene } from "./relics_scene.js";
import { SlopyShitScene } from "./slopyshit_scene.js";


export class AutumnScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/Autumn.png"
        super(canvas, img, [new Vector(673, 458), new Vector(309, 45), new Vector(241, 494)], player)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(79, 69, new Vector(0, 471), OBSTACLE_LAYER, null, null, false);
        new Box(62, 22, new Vector(0, 298), OBSTACLE_LAYER, null, null, false);
        new Box(12, 103, new Vector(144, 211), OBSTACLE_LAYER, null, null, false);
        new Box(15, 94, new Vector(50, 246), OBSTACLE_LAYER, null, null, false);
        new Box(50, 10, new Vector(0, 246), OBSTACLE_LAYER, null, null, false);
        new Box(97, 117, new Vector(689, 197), OBSTACLE_LAYER, null, null, false);
        new Box(130, 126, new Vector(147, 211), OBSTACLE_LAYER, null, null, false);
        new Box(136, 192, new Vector(475, 172), OBSTACLE_LAYER, null, null, false);
        new Box(168, 137, new Vector(792, 403), OBSTACLE_LAYER, null, null, false);
        new Box(122, 367, new Vector(838, 0), OBSTACLE_LAYER, null, null, false);
        new Box(171, 106, new Vector(789, 193), OBSTACLE_LAYER, null, null, false);
        new Box(26, 12, new Vector(800, 398), OBSTACLE_LAYER, null, null, false);
        new Box(26, 12, new Vector(812, 386), OBSTACLE_LAYER, null, null, false);
        new Box(26, 12, new Vector(826, 374), OBSTACLE_LAYER, null, null, false);
        new Box(26, 12, new Vector(837, 362), OBSTACLE_LAYER, null, null, false);
        new Box(166, 48, new Vector(794, 364), OBSTACLE_LAYER, null, null, false);
        new Box(220, 239, new Vector(389, 301), OBSTACLE_LAYER, null, null, false);
        new Box(165, 144, new Vector(424, 157), OBSTACLE_LAYER, null, null, false);
        new Box(92, 80, new Vector(424, 77), OBSTACLE_LAYER, null, null, false);
        new Box(74, 77, new Vector(417, 0), OBSTACLE_LAYER, null, null, false);
        new Box(20, 300, new Vector(275, 164), OBSTACLE_LAYER, null, null, false);
        new Box(65, 212, new Vector(0, 0), OBSTACLE_LAYER, null, null, false);
        new Box(68, 104, new Vector(66, 0), OBSTACLE_LAYER, null, null, false);
        new Box(139, 59, new Vector(99, 0), OBSTACLE_LAYER, null, null, false);










        const img_steindings_1 = new Image;
        img_steindings_1.src = "assets/autumn/steindings_autumn_1.png";

        new RectangularSprite(img_steindings_1, 89, 118, new Vector(0, 418), FOREGROUND_LAYER, true);

        const img_steindings_2 = new Image;
        img_steindings_2.src = "assets/autumn/steindings_autumn_2.png";

        let steindings2 = new RectangularSprite(img_steindings_2, 67, 137, new Vector(0, 178), DYNAMIC_LAYER, true);
        steindings2.pivot = new Vector(53, 284);


        const img_steindings_3 = new Image;
        img_steindings_3.src = "assets/autumn/steindings_autumn_3.png";

        let steindings3 = new RectangularSprite(img_steindings_3, 135, 283, new Vector(144, 81), DYNAMIC_LAYER, true);
        steindings3.pivot = new Vector(147, 275);

        const img_steindings_4 = new Image;
        img_steindings_4.src = "assets/autumn/steindings_autumn_4.png";

        let steindings4 = new RectangularSprite(img_steindings_4, 106, 128, new Vector(684, 186), DYNAMIC_LAYER, true);
        steindings4.pivot = new Vector(693, 291);

        const img_bush_autumn = new Image;
        img_bush_autumn.src = "assets/autumn/bush_autumn_1.png";

        new RectangularSprite(img_bush_autumn, 131, 140, new Vector(93, 399), FOREGROUND_LAYER, true);

        const img_blätter_a = new Image;
        img_blätter_a.src = "assets/autumn/blätter_autumn_1.png";

        new RectangularSprite(img_blätter_a, 306, 300, new Vector(556, 0), FOREGROUND_LAYER, true);

        const img_steindings_5 = new Image;
        img_steindings_5.src = "assets/autumn/steindings_autumn_5.png";

        let steindings5 = new RectangularSprite(img_steindings_5, 135, 256, new Vector(476, 81), DYNAMIC_LAYER, true);
        steindings5.pivot = new Vector(106, 328);





        new Trigger(157, 2, new Vector(257, 0), () => {
            console.log("HEHE");
            this.loadScene(RelicsScene, 0);
        }, true);

        new Trigger(195, 3, new Vector(186, 536), () => {
            console.log("HEHE");
            this.loadScene(PentagramScene, 1);
        }, true);

        new Trigger(106, 3, new Vector(627, 537), () => {
            console.log("HEHE");
            this.loadScene(SlopyShitScene, 2);
        }, true);

    }
}