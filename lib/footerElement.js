import createElement from "./elements";

// Declare function for footer Element
export function createFooterElement() {
  const footerElement = createElement("footer", { className: "footer" }, [
    createElement("p", {}, ["Background photo by Ivana Cajina on Unsplash"]),
    createElement("p", {}, ["Character picturs from Tim Sarvey on GitHub"]),
  ]);

  return footerElement;
}
