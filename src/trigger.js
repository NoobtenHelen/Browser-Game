import { Box } from "./dynamics.js";
import { TRIGGER_LAYER } from "./layers.js";

export class Trigger extends Box {
    triggered = false;

    constructor(width, height, position, enterFunction, exitFunction, visibility = false) {
        super(width, height, position, TRIGGER_LAYER, null, null, visibility);
        this.enterFunction = () => {
            this.triggered = true;
            if (enterFunction) {
                enterFunction();
            }
        };
        this.exitFunction = () => {
            this.triggered = false;
            if (exitFunction) {
                exitFunction();
            }
        };
    }
}