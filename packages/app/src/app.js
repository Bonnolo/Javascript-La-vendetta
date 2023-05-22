import "./scss/app.scss";
import Router from "./router.js";
import configuration from "./routes.json";

const router = new Router(configuration);
window.router = router;
