import createElement from "./elements";

// Declare function for footer Element
export function createFooterElement() {
  const footerElement = createElement("footer", { className: "footer" }, [
    "Background photo by Ivana Cajina on Unsplash, character picturs from Tim Sarvey on GitHub",
  ]);
  return footerElement;
}
