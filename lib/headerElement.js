import createElement from "./elements";

export function createHeaderElement() {
  const headerElement = createElement("header", { className: "header" }, [
    createElement("h1", { className: "appTitle" }, ["STAR WARS"]),
    createElement("h2", { className: "appSubtitle" }, ["character of the day"]),
  ]);
  return headerElement;
}
