import { allDrawableObjects, Box, RectangularSprite, Vector } from "./dynamics.js";
import { OBSTACLE_LAYER, TRIGGER_LAYER } from "./layers.js";
import { Player } from "./player.js";
//import { RuinsScene } from "./scenes/ruins_scene.js";
import { SpawnScene } from "./scenes/spawn_scene.js";

let canvas;		//Zeichenfläche
let context;	//Zeichenwerkzeuge

let player;	//Spielfigur

document.body.onload = () => {
    init();
    window.requestAnimationFrame(frame);
}

function init() {
    canvas = document.getElementById("world");

    context = canvas.getContext("2d");

    player = new Player(new Vector(0, 0));

    let firstScene = new SpawnScene(canvas, player);

    player.position = firstScene.spawnPoint;

    document.body.addEventListener("keydown", player.handleKeydown);
    document.body.addEventListener("keyup", player.handleKeyup);
}

function update(elapsed) {
    player.update(elapsed);

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

    allDrawableObjects.forEach(layer => {
        layer.forEach(element => {
            element.draw(context);
        })
    });
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
