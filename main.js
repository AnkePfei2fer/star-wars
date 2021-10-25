import "./style.css";

import createElement from "./lib/elements";
import { createHeaderElement } from "./lib/headerElement";
import { createTopElement } from "./components/topElement";
import { createSearchBar } from "./components/searchBar";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";

import { fetchCharacters } from "./lib/fetchAPI";
import { fetchRandomCharacter } from "./lib/fetchAPI";
import { handleSubmit } from "./lib/searchQuery";

async function renderApp() {
  // Select "body" of the app
  const appElement = document.body.querySelector("#app");

  // Declare function and returning a ranodm number between 1 and 84
  function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
  }
  const randomNumber = getRandomInt(84);
  // console.log(randomNumber);

  // Fetch all (1) and random (2) character data from SWAPI
  const characters = await fetchCharacters();
  const randomCharacter = await fetchRandomCharacter(randomNumber);

  // Generate app components
  const headerElement = createHeaderElement();
  const topElement = createTopElement(randomNumber, randomCharacter);
  const searchBar = createSearchBar(handleSubmit);

  const browse = createElement("h2", { className: "subheader" }, [
    "Browse characters",
  ]);

  const mainElement = createMainElement(characters);
  const footerElement = createFooterElement();

  // Append components to the app
  appElement.append(
    headerElement,
    topElement,
    searchBar,
    browse,
    mainElement,
    footerElement
  );
}

renderApp();
