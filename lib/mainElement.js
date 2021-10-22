import createElement from "./elements";

export function createMainElement() {
  const mainElement = createElement("main", { className: "main" }, [
    "in development",
  ]);
  return mainElement;
}
