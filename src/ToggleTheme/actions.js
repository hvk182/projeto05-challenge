import * as elements from "./elements.js";
import * as sounds from "./sounds.js";
import state from "./state.js";

export function setTheme(theme) {
  clearTheme();

  if (theme != state.currentTheme) {
    elements[theme].classList.add("selected");
    document.documentElement.classList.add(theme);
    sounds[theme].play();
    state.currentTheme = theme;
  } else {
    state.currentTheme = "";
  }
}

function clearTheme() {
  if (state.currentTheme != "") {
    const currentSelected = elements.cards.querySelector(".selected");

    if (currentSelected != undefined) {
      currentSelected.classList.remove("selected");
    }

    document.documentElement.classList.remove(state.currentTheme);
    sounds[state.currentTheme].pause();
  }
}
