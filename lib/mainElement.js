import createElement from "./elements";

// Declare function for mainElement
export function createMainElement() {
  const mainElement = createElement("main", { className: "main" }, [
    "in development",
  ]);
  return mainElement;
}
