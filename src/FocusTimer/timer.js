import state from "./state.js";
import * as elements from "./elements.js";
import * as actions from "./actions.js";

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  elements.minutes.textContent = formatTimer(minutes);
  elements.seconds.textContent = formatTimer(seconds);
}

export function countdown() {
  clearTimeout(state.countdownId);

  if (!state.isRunning) {
    return;
  }

  let minutes = Number(elements.minutes.textContent);
  let seconds = Number(elements.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    actions.reset();
    return;
  }

  updateDisplay(minutes, seconds);

  state.countdownId = setTimeout(() => countdown(), 1000);
}

export function formatTimer(number) {
  return String(number).padStart(2, "0");
}
