import createElement from "./elements";

// Declare function for footer Element
export function createFooterElement() {
  const footerElement = createElement("footer", { className: "footer" }, [
    "footer",
  ]);
  return footerElement;
}
