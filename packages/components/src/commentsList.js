import "./list-group.scss";
import ListComponent from "./list.js";
import CommentComponent from "./comment.js";

class CommentsListComponent extends ListComponent {
  createComponent(item) {
    return new CommentComponent(item);
  }
}

export default CommentsListComponent;
