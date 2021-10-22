import "./style.css";
import { createMainElement } from "./lib/mainElement";
import { createFooterElement } from "./lib/footerElement";

const appElement = document.body.querySelector("#app");

const mainElement = createMainElement();
const footerElement = createFooterElement();

appElement.append(mainElement, footerElement);
