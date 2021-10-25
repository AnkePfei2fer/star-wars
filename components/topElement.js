import createElement from "../lib/elements";
import { createCharacterOfTheDayComponent } from "./characterOfTheDayComponent";
import styles from "./topElement.module.css";

// Declare function for top element
export function createTopElement(randomNumber, randomCharacter) {
  const characterElement = createCharacterOfTheDayComponent(
    randomNumber,
    randomCharacter
  );

  const topElement = createElement("div", { className: styles.top }, [
    characterElement,
  ]);
  return topElement;
}
