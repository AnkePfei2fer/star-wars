import createElement from "./elements";
import { createCardComponent } from "../components/cardComponent";
import { createCharacterOfTheDayComponent } from "../components/characterOfTheDayComponent";

// Declare function for mainElement
export function createMainElement(characters, randomNumber, randomCharacter) {
  const characterElement = createCharacterOfTheDayComponent(
    randomNumber,
    randomCharacter
  );

  const browse = createElement("h2", { className: "subheader" }, [
    "Browse characters",
  ]);

  const cardElement = characters.map((character, index) =>
    createCardComponent(character, index + 1)
  );

  const mainElement = createElement("main", { className: "main" }, [
    characterElement,
    browse,
    ...cardElement,
  ]);

  return mainElement;
}
