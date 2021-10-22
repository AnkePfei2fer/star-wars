import createElement from "../lib/elements";
import styles from "./cardComponent.module.css";

export function createCardComponent() {
  const cardTitle = createElement("h2", {}, ["Luke Skywalker"]);
  const cardComponent = createElement("article", { className: styles.card }, [
    cardTitle,
  ]);
  return cardComponent;
}
