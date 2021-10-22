import createElement from "./elements";
import { createCardComponent } from "../components/cardComponent";
import { createCharacterOfTheDayComponent } from "../components/characterOfTheDayComponent";

// Declare function for mainElement
export function createMainElement(characters, randomNumber, randomCharacter) {
  const cardElement = characters.map((character) =>
    createCardComponent(character)
  );

  const characterElement = createCharacterOfTheDayComponent(
    randomNumber,
    randomCharacter
  );

  const mainElement = createElement("main", { className: "main" }, [
    characterElement,
    ...cardElement,
  ]);

  return mainElement;
}
