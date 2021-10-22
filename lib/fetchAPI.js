// Fetch character data from SWAPI
export default async function fetchCharacters() {
  const response = await fetch("https://swapi.dev/api/people/");
  const body = await response.json();
  const characters = body.results;
  // console.log(characters);
  return characters;
}
