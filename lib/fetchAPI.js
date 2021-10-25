// Fetch character data from SWAPI
export async function fetchCharacters() {
  const response = await fetch("https://swapi.dev/api/people/");
  const body = await response.json();
  const characters = body.results;
  console.log(characters);
  return characters;
}

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
//   const randomNumber = getRandomInt(84);
// }

// Fetch character data from SWAPI
export async function fetchRandomCharacter(randomNumber) {
  const response = await fetch(`https://swapi.dev/api/people/${randomNumber}/`);
  const body = await response.json();
  console.log(body);
  const randomCharacter = body.name;
  console.log(randomCharacter);
  return randomCharacter;
}
