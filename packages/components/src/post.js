class PostComponent {
    constructor(post) {
        // DATI CHE ARRIVANO DAL SERVER
        this.title = post.title
        this.body = post.body
        // PRESENTAZIONE DEI DATI
        this.template = `<div>
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                        </div>`
        // ELEMENTO HTML COSTRUITO VIA JS NON INSERITO NEL DOM
        this.element = document.createElement('li')
        this.element.innerHTML = this.template
        // TODO
        this.comments = []
    }
}
export default PostComponent;