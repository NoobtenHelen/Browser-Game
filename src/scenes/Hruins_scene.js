import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { DYNAMIC_LAYER, FOREGROUND_LAYER, OBSTACLE_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { HSpawnScene } from "./Hspawn_scene.js";
import { LookoutScene } from "./lookout_scene.js";
import { SlopyShitScene } from "./slopyshit_scene.js";
import { SpawnScene } from "./spawn_scene.js";

export class HRuinsScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/HRuins.png"
        super(canvas, img, [new Vector(207, 253), new Vector(899, 303), new Vector(519, 60)], player)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

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
        //new Box(300, 195, new Vector(670, 150), OBSTACLE_LAYER, null, null, true);
        new Box(180, 600, new Vector(655, 0), OBSTACLE_LAYER, null, null, false);
        new Box(170, 600, new Vector(0, 0), OBSTACLE_LAYER, null, null, false);
        new Box(196, 147, new Vector(64, 300), OBSTACLE_LAYER, null, null, false);





        const img2 = new Image;
        img2.src = "assets/ruins/Tree_HRuins_1.png";

        let tree = new RectangularSprite(img2, 290, 260, new Vector(410, 86), DYNAMIC_LAYER, true);
        tree.pivot = new Vector(0, 310)

        const img3 = new Image;
        img3.src = "assets/ruins/baum_ruins_2.png";

        new RectangularSprite(img3, 295, 145, new Vector(665, 0), OBSTACLE_LAYER, true);

        const img4 = new Image;
        img4.src = "assets/ruins/Stumpen_HRuins_1.png";

        new RectangularSprite(img4, 102, 84, new Vector(858, 189), OBSTACLE_LAYER, true);

        const img5 = new Image;
        img5.src = "assets/ruins/Ruin_HRuins_1.png";

        new RectangularSprite(img5, 260, 172, new Vector(0, 169), FOREGROUND_LAYER, true);

        // Example Trigger
        new Trigger(160, 10, new Vector(445, 0), () => {
            console.log("HEHE");
            this.loadScene(SlopyShitScene, 0);
        }, true);


        new Trigger(3, 270, new Vector(171, 0), () => {
            console.log("HEHE");
            this.loadScene(HSpawnScene, 1);
        }, false);

        new Trigger(2, 75, new Vector(958, 269), () => {
            console.log("HEHE");
            this.loadScene(LookoutScene, 1);
        }, false);
    }
}