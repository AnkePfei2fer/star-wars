import "./style.css";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";
import { createHeaderElement } from "./lib/headerElement";

const appElement = document.body.querySelector("#app");

const headerElement = createHeaderElement();
const mainElement = createMainElement();
const footerElement = createFooterElement();

appElement.append(headerElement, mainElement, footerElement);
