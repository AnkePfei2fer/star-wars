import "./style.css";
import createElement from "./lib/elements";
import { createHeaderElement } from "./lib/headerElement";
import { createTopElement } from "./components/topElement";
import createSearchBar from "./components/searchBar";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { fetchCharacters } from "./lib/fetchAPI";
import { fetchRandomCharacter } from "./lib/fetchAPI";
import { createCardComponent } from "./components/cardComponent";

const appElement = document.body.querySelector("#app");

// Declare function and returning a ranodm number between 1 and 84
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
const searchBar = createSearchBar(handleSubmit);
const browse = createElement("h2", { className: "subheader" }, [
  "Browse characters",
]);

// Declare function for search query
async function handleSubmit(searchQuery) {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchQuery}`
  );
  const body = await response.json();
  const searchResults = body.results;
  console.log(searchResults);

  const characterSearch = searchResults.map((searchResult) =>
    createCardComponent(searchResult)
  );

  // Completely clear the content of selected element
  document.body.querySelector("main").innerHTML = "";
  document.body.querySelector("main").prepend(...characterSearch);
}

// Append components to app
appElement.append(
  headerElement,
  topElement,
  searchBar,
  browse,
  mainElement,
  footerElement
);
