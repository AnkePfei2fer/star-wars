import createElement from "../lib/elements";
import styles from "./characterOfTheDayComponent.module.css";

// Declare the function for creating card components
export function createCharacterOfTheDayComponent(randomNumber) {
  const picture = createElement("img", {
    className: styles.picture,
    src: `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${randomNumber}.jpg`,
  });

  //   const cardTitle = createElement("h2", {}, name);
  //   const homeworldElement = createElement("span", {}, homeworld);
  //   const characterElement = createElement(
  //     "article",
  //     { className: styles.card },
  //     [picture, cardTitle, homeworldElement]
  //   );

  //   // Fetch Homeworld information from API
  //   fetch(homeworld)
  //     .then((response) => response.json())
  //     .then((body) => {
  //       homeworldElement.textContent = body.name;
  //     });

  //   return characterElement;
  return picture;
}
