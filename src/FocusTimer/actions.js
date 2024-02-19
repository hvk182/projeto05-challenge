import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from "./elements.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
}

export function rush() {
  AlterMinutes("rush");
}

export function delay() {
  AlterMinutes("delay");
}

function AlterMinutes(action) {
  let minutes = Number(elements.minutes.textContent);

  switch (action) {
    case "rush":
      minutes += state.rushMinutes;
      break;
    case "delay":
      minutes -= state.delayMinutes;
      break;
    default:
      break;
  }

  if (minutes < 0) {
    reset();
    return;
  }

  elements.minutes.textContent = timer.formatTimer(minutes);
}
