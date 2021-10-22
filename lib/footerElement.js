import createElement from "./elements";

// Declare function for footer Element
export function createFooterElement() {
  const footerElement = createElement("footer", { className: "footer" }, [
    "Photo by Ivana Cajina on Unsplash",
  ]);
  return footerElement;
}
