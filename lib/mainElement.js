import createElement from "./elements";
import { createCharacterOfTheDayComponent } from "../components/characterOfTheDayComponent";
// import createSearchBar from "../components/searchBar";
import { createCardComponent } from "../components/cardComponent";

// Declare function for mainElement
export function createMainElement(characters) {
  const cardElements = characters.map((character, index) =>
    createCardComponent(character, index + 1)
  );

  const mainElement = createElement("main", { className: "main" }, [
    // characterElement,
    // browse,
    ...cardElements,
  ]);

  return mainElement;
}

export function createTopElement(randomNumber, randomCharacter) {
  const characterElement = createCharacterOfTheDayComponent(
    randomNumber,
    randomCharacter
  );

  const browse = createElement("h2", { className: "subheader" }, [
    "Browse characters",
  ]);
  const topElement = createElement("div", { className: "top" }, [
    characterElement,
    browse,
  ]);
  return topElement;
}
