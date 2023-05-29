import "./scss/app.scss";
import { Menu } from "@mohole-js-02/components";
import Router from "./router.js";
import configuration from "./routes.json";

const menuSelector = "#menu";
const menuUrl = "./routes.json";
const menu = new Menu(menuSelector, menuUrl, configuration);

await menu.render();

const router = new Router(configuration);
window.router = router;
