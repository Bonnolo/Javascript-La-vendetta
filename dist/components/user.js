class UserComponent {
  constructor(user) {
    this.name = user.name;
    this.template = `<span>${user.name}</span>`;
    this.element = document.createElement("li");
    this.element.innerHTML = this.template;
  }
}

export default UserComponent;
