import { Box, RectangularSprite, Vector } from "../dynamics.js";
import { Enemy } from "../enemy.js";
import { OBSTACLE_LAYER, DYNAMIC_LAYER, FOREGROUND_LAYER, UI_LAYER } from "../layers.js";
import { Scene } from "../scene.js"; // ../ = Ein ordner darüber
import { Trigger } from "../trigger.js";
import { RuinsScene } from "./ruins_scene.js";

export class SpawnScene extends Scene {
    constructor(canvas, player) {
        const img = new Image;
        img.src = "assets/backgrounds/Spawn.png"
        super(canvas, img, [new Vector(322, 250), new Vector(899, 250)], player)

        let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER);

        let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
        upperBounds.color = "black";

        let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
        leftBounds.color = "black";

        let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
        rightBounds.color = "black";

        new Box(canvas.width, 20, new Vector(0, 395), OBSTACLE_LAYER, null, null, false)
        new Box(canvas.width, 100, new Vector(0, 0), OBSTACLE_LAYER, null, null, false)
        new Box(70, 230, new Vector(0, 0), OBSTACLE_LAYER, null, null, false)
        new Box(100, 165, new Vector(510, 0), OBSTACLE_LAYER, null, null, false)

        let enemy = new Enemy(new Vector(546, 284));

        const img_bush = new Image;
        img_bush.src = "assets/spawn/bush_spawn_1.png";

        let bush = new RectangularSprite(img_bush, 67, 71, new Vector(138, 283), DYNAMIC_LAYER, true);
        bush.pivot = new Vector(169, 337)
        new Box(10, 10, new Vector(162, 339), OBSTACLE_LAYER, null, null, false);

        const img_root = new Image;
        img_root.src = "assets/spawn/wurzel_spawn_1.png";

        let root = new RectangularSprite(img_root, 135, 83, new Vector(825, 301), DYNAMIC_LAYER, true);
        root.pivot = new Vector(848, 311);

        const img_tree = new Image;
        img_tree.src = "assets/spawn/baum_spawn_1.png";

        let treetop = new RectangularSprite(img_tree, 419, 311, new Vector(541, 0), FOREGROUND_LAYER, true);

        new Box(75, 100, new Vector(885, 227), OBSTACLE_LAYER, null, null, false)


        new Trigger(30, 270, new Vector(930, 0), () => {
            console.log("HEHE");
            this.loadScene(RuinsScene, 0);
        }, null, false);

        const img_interact = new Image;
        img_interact.src = "assets/spawn/Interact.png";

        let greenTutorialUI = new RectangularSprite(img_interact, 180, 70, new Vector(325, 14), UI_LAYER, false);
        let greentutorial = new Trigger(42, 31, new Vector(397, 180), () => {
            greenTutorialUI.visible = true;
        }, () => {
            greenTutorialUI.visible = false;
        }, false);

        const img_attack = new Image;
        img_attack.src = "assets/spawn/Attack.png";

        let redTutorialUI = new RectangularSprite(img_attack, 180, 70, new Vector(325, 14), UI_LAYER, false);
        let redtutorial = new Trigger(42, 31, new Vector(397, 236), () => {
            redTutorialUI.visible = true;
        }, () => {
            redTutorialUI.visible = false;
        }, false);

        const img_dash = new Image;
        img_dash.src = "assets/spawn/Dash.png";

        let blueTutorialUI = new RectangularSprite(img_dash, 180, 70, new Vector(325, 14), UI_LAYER, false);
        let bluetutorial = new Trigger(42, 31, new Vector(397, 293), () => {
            blueTutorialUI.visible = true;
        }, () => {
            blueTutorialUI.visible = false;
        }, false);
    }
}