import "./style.css";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { createHeaderElement } from "./lib/headerElement";
import { fetchCharacters } from "./lib/fetchAPI";
// import { fetchRandomCharacter } from "./lib/fetchAPI";

const appElement = document.body.querySelector("#app");

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomInt(84);

// Fetch character data from SWAPI
const characters = await fetchCharacters();
const headerElement = createHeaderElement();
const mainElement = createMainElement(characters, randomNumber);
const footerElement = createFooterElement();

appElement.append(headerElement, mainElement, footerElement);
