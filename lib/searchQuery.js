import { createCardComponent } from "../components/cardComponent";

// Declare function for search query
export async function handleSubmit(searchQuery) {
  const response = await fetch(
    `https://swapi.dev/api/people/?search=${searchQuery}`
  );
  const body = await response.json();
  const searchResults = body.results;
  console.log(searchResults);

  const characterSearch = searchResults.map((searchResult) =>
    createCardComponent(searchResult)
  );

  // Completely clear the content of the selected element
  document.body.querySelector("main").innerHTML = "";
  document.body.querySelector("main").prepend(...characterSearch);
}
