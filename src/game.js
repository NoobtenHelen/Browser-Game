import { allDrawableObjects, Box, RectangularSprite, Vector } from "./dynamics.js";
import { OBSTACLE_LAYER, PLAYER_LAYER, TRIGGER_LAYER } from "./layers.js";
import { Player } from "./player.js";
import { Trigger } from "./trigger.js";

let canvas;		//Zeichenfläche
let context;	//Zeichenwerkzeuge

let player;	//Spielfigur
let object;
let backgroundColor = "lightblue"

document.body.onload = () => {
    init();
    window.requestAnimationFrame(frame);
}

function init() {
    canvas = document.getElementById("world");
    context = canvas.getContext("2d");

    player = new Player(new Vector(50, canvas.height / 2));

    canvas.addEventListener("keydown", player.handleKeydown);
    canvas.addEventListener("keyup", player.handleKeyup);
    canvas.focus();

    let floorBounds = new Box(canvas.width, 0, new Vector(0, canvas.height), OBSTACLE_LAYER); 3

    let upperBounds = new Box(canvas.width, 1, new Vector(0, -1), OBSTACLE_LAYER);
    upperBounds.color = "black";

    let leftBounds = new Box(1, canvas.height, new Vector(-1, 0), OBSTACLE_LAYER);
    leftBounds.color = "black";

    let rightBounds = new Box(1, canvas.height, new Vector(canvas.width, 0), OBSTACLE_LAYER);
    rightBounds.color = "black";

    new Trigger(50, 50, new Vector(400, 200), () => {
        backgroundColor = "red";
    }, true);

    new Trigger(50, 50, new Vector(200, 200), () => {
        player.position = new Vector(50, canvas.height / 2);
    }, true);

    let img2 = new Image();
    img2.src = "assets/char.png";
    object = new RectangularSprite(img2, 100, 100, new Vector(200, 500), OBSTACLE_LAYER);
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
    context.fillStyle = backgroundColor;
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
