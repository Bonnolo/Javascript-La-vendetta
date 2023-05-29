import "./list-group.scss";
import ListComponent from "./list.js";
import PostComponent from "./post.js";

class PostListComponent extends ListComponent {
  createComponent(item) {
    return new PostComponent(item);
  }
}

export default PostListComponent;
