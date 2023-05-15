import { renderElement, toJson } from "../utils/index.js";

class ListComponent {
  constructor(selector, url) {
    this.containerElement = document.querySelector(selector);
    this.url = url;
    this.items = [];
    this.components = [];
  }

  async getItems() {
    return fetch(this.url).then(toJson);
  }

  addComponents() {
    for (let item of this.items) {
      this.components.push(this.createComponent(item));
    }
  }

  renderComponents() {
    this.containerElement.innerHTML = "";
    for (let component of this.components) {
      renderElement(component, this.containerElement);
    }
  }

  async render() {
    // recupero le informazioni della mia lista
    this.items = await this.getItems();
    // creazione per ciascun dato proveniente da server
    // di componenti
    this.addComponents();
    // render dei componenti della lista (this.components)
    this.renderComponents();
  }
}

export default ListComponent;
