import { addToLayer, allDrawableObjects, Vector } from "./dynamics.js";
import { Enemy } from "./enemy.js";
import { DYNAMIC_FOREGROUND_LAYER, DYNAMIC_LAYER, OBSTACLE_LAYER, TRIGGER_LAYER } from "./layers.js";
import { Player } from "./player.js";
import { RuinsScene } from "./scenes/ruins_scene.js";
import { SpawnScene } from "./scenes/spawn_scene.js";

let canvas;		//Zeichenfläche
let context;	//Zeichenwerkzeuge

let player;	//Spielfigur
let enemy;

document.body.onload = () => {
    init();
    window.requestAnimationFrame(frame);
}

function init() {
    canvas = document.getElementById("world");

    context = canvas.getContext("2d");

    player = new Player(new Vector(0, 0));
    enemy = new Enemy(new Vector(0,0));

    let firstScene = new SpawnScene(canvas, player, enemy);
    //let secondScene = new RuinsScene(canvas, player);

    player.position = firstScene.spawnPoints[0];
    enemy.position = firstScene.spawnPoints[2];

    document.body.addEventListener("keydown", player.handleKeydown);
    document.body.addEventListener("keyup", player.handleKeyup);
}

function update(elapsed) {
    player.update(elapsed);
    enemy.update(elapsed);

    allDrawableObjects[OBSTACLE_LAYER].forEach(obstacle => {
        obstacle.reflectBall(player, 0); // set damping to 0 to stop the player immediately
    });

    allDrawableObjects[TRIGGER_LAYER].forEach(trigger => {
        if (trigger.collidesWith(player.triggerCollider)) {
            trigger.executeFunction();
        }
    })

}

function paint() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, canvas.width, canvas.height);

    allDrawableObjects.forEach((layer, layerIndex) => {
        layer.forEach(element => {
            if (layerIndex === DYNAMIC_LAYER && player.position.y < element.pivot.y) {
                addToLayer(DYNAMIC_FOREGROUND_LAYER, element);
                return;
            }
            element.draw(context);
        })
    });

    allDrawableObjects[DYNAMIC_FOREGROUND_LAYER] = []
}

let previous, elapsed;
function frame(timestamp) {
    if (!previous) previous = timestamp;
    elapsed = timestamp - previous;
    update(elapsed / 1000);
    paint();
    previous = timestamp;
    window.requestAnimationFrame(frame);
}
