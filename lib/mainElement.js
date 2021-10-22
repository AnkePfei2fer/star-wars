import createElement from "./elements";
import { createCardComponent } from "../components/cardComponent";

// Declare function for mainElement
export function createMainElement(characters) {
  const cardElement = characters.map((character) =>
    createCardComponent(character)
  );

  const mainElement = createElement("main", { className: "main" }, [
    ...cardElement,
  ]);

  return mainElement;
}
