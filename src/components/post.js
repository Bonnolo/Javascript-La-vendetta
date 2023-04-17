class PostComponent {
  constructor(post) {
    /* dati arrivanti dal server */
    this.title = post.title;
    this.body = post.body;
    /* presentazione dei dati */
    this.template = `<div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>`;
    // elemento html costruito via js che poi vado ad inserire nel DOM
    this.element = document.createElement("li");
    this.element.innerHTML = this.template;
  }
}
export default PostComponent;
