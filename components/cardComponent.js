import createElement from "../lib/elements";
import styles from "./cardComponent.module.css";

// Declare the function for creating card components
export function createCardComponent(
  { name, species, homeworld, birth_year },
  characterId
) {
  const picture = createElement("img", {
    className: styles.picture,
    src: `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/characters/${characterId}.jpg`,
  });
  const cardTitle = createElement("h2", {}, name);
  const speciesElement = createElement("span", {}, species);
  const homeworldElement = createElement("span", {}, homeworld);
  const cardElement = createElement("article", { className: styles.card }, [
    picture,
    cardTitle,
    createElement("h4", {}, "Species"),
    speciesElement,
    createElement("h4", {}, "Homeworld"),
    homeworldElement,
    createElement("h4", {}, "Year of Birth"),
    birth_year,
  ]);

  // Fetch species information from API
  fetch(species)
    .then((response) => response.json())
    .then((body) => {
      speciesElement.textContent = body.name;
    });

  // Fetch Homeworld information from API
  fetch(homeworld)
    .then((response) => response.json())
    .then((body) => {
      homeworldElement.textContent = body.name;
    });

  return cardElement;
}
