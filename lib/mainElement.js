import createElement from "./elements";
import { createCardComponent } from "../components/cardComponent";

// Declare function for mainElement
export function createMainElement(characters) {
  const cardElements = characters.map((character, index) =>
    createCardComponent(character, index + 1)
  );

  const mainElement = createElement(
    "main",
    { className: "main" },
    cardElements
  );

  return mainElement;
}
