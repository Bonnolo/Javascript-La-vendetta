import { PostListComponent } from "@mohole-js-02/components";

const render = () => {
  const postsURL = "http://jsonplaceholder.typicode.com/posts";
  let postListSelector = "#posts";

  let postListComponent = new PostListComponent(postListSelector, postsURL);
  postListComponent.render();
};

export { render };
