import * as elements from "./elements.js";
import * as actions from "./actions.js";

export function registerCards() {
  elements.cards.addEventListener("click", (event) => {
    const theme = event.target.dataset.theme;

    if (theme != undefined) {
      actions.setTheme(theme);
    }
  });
}
