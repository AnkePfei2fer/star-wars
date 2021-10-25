import createElement from "../lib/elements";
import styles from "./searchBar.module.css";

// Declare function to create search bar
export function createSearchBar(onSubmit) {
  const inputField = createElement("input", {
    type: "text",
    placeholder: "Search characters",
    className: styles.inputField,
  });

  const submitButton = createElement(
    "button",
    {
      type: "submit",
      className: styles.submitButton,
    },
    ["GO!"]
  );

  const searchBar = createElement(
    "form",
    {
      className: styles.search,
      onsubmit: function (event) {
        event.preventDefault();
        onSubmit(inputField.value);
      },
    },
    [inputField, submitButton]
  );
  return searchBar;
}
