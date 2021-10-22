import createElement from "./elements";
import { createCardComponent } from "../components/cardComponent";

// Declare function for mainElement
export function createMainElement() {
  const cardComponent = createCardComponent();
  return cardComponent;

  const mainElement = createElement("main", { className: "main" }, [
    [cardComponent],
  ]);

  return mainElement;
}
