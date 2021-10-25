import "./style.css";
import { createHeaderElement } from "./lib/headerElement";
import { createTopElement } from "./lib/mainElement";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { fetchCharacters } from "./lib/fetchAPI";
import { fetchRandomCharacter } from "./lib/fetchAPI";

const appElement = document.body.querySelector("#app");

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomInt(84);
console.log(randomNumber);

// Fetch character data from SWAPI
const characters = await fetchCharacters();
const randomCharacter = await fetchRandomCharacter(randomNumber);
const headerElement = createHeaderElement();
const topElement = createTopElement(randomNumber, randomCharacter);
const mainElement = createMainElement(characters);
const footerElement = createFooterElement();

appElement.append(headerElement, topElement, mainElement, footerElement);
