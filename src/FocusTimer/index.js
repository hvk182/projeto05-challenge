import * as events from "./events.js";
import * as timer from "./timer.js";

export function start(minutes, seconds) {
  timer.updateDisplay(minutes, seconds);
  events.registerControls();
}
