import createElement from "../lib/elements";
import styles from "./cardComponent.module.css";

export function createCardComponent({ name }) {
  const cardTitle = createElement("h2", {}, name);
  const cardElement = createElement("article", { className: styles.card }, [
    cardTitle,
  ]);
  return cardElement;
}
