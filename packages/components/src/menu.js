import ListComponent from "./list.js";
import Link from "./link.js";
import "./menu.scss";

class Menu extends ListComponent {
  createComponent(item) {
    return new Link(item);
  }
}

export default Menu;
