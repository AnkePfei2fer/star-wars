import createElement from "../lib/elements";
import styles from "./characterOfTheDayComponent.module.css";

// Declare the function for creating card components
export function createCharacterOfTheDayComponent(
  randomNumber,
  randomCharacter
) {
  const characterOfTheDay = createElement(
    "div",
    { className: styles.characterOfTheDay },
    [
      createElement("img", {
        className: styles.picture,
        src: `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${randomNumber}.jpg`,
      }),

      createElement(
        "h2",
        { className: styles.name, id: styles.name },
        randomCharacter
      ),
    ]
  );
  return characterOfTheDay;
}
