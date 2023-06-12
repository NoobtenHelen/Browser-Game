import { Box } from "./dynamics.js";
import { TRIGGER_LAYER } from "./layers.js";

export class Trigger extends Box {
    constructor(width, height, position, executeFunction, visibility = false) {
        super(width, height, position, TRIGGER_LAYER, null, null, visibility);
        this.executeFunction = executeFunction;
    }
}