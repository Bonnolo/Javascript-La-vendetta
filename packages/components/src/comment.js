class CommentComponent {
  constructor(comment) {
    // DATI CHE ARRIVANO DAL SERVER
    this.name = comment.name;
    this.email = comment.email;
    this.body = comment.body;
    // PRESENTAZIONE DEI DATI
    this.template = `<div>
                            <h3>${comment.name}</h3>
                            <h3>${comment.email}</h3>
                            <p>${comment.body}</p>
                        </div>`;
    // ELEMENTO HTML COSTRUITO VIA JS NON INSERITO NEL DOM
    this.element = document.createElement("li");
    this.element.classList.add("list-group-item");
    console.log("pepegas");
    this.element.innerHTML = this.template;
  }
}
export default CommentComponent;
