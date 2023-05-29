class Link {
  constructor(route) {
    this.path = route.path;
    this.label = route.label;
    this.template = `<a class="nav-link" href="${this.path}">${this.label}</a>`;
    this.element = document.createElement("li");
    this.element.classList.add("nav-item");
    this.element.innerHTML = this.template;
  }
}

export default Link;
