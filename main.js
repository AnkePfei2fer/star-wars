import "./style.css";
import { createMainElement } from "./lib/mainElement";

const appElement = document.body.querySelector("#app");

const mainElement = createMainElement();

appElement.append(mainElement);
