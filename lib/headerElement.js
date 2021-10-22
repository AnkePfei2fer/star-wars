import createElement from "./elements";

export function createHeaderElement() {
  const headerElement = createElement("header", { className: "header" }, [
    "header",
  ]);
  return headerElement;
}
