import "./style.css";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { createHeaderElement } from "./lib/headerElement";
import fetchCharacters from "./lib/fetchAPI";

const appElement = document.body.querySelector("#app");

// Fetch character data from SWAPI
const characters = await fetchCharacters();

const headerElement = createHeaderElement();
const mainElement = createMainElement(characters);
const footerElement = createFooterElement();

appElement.append(headerElement, mainElement, footerElement);
