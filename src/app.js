import { PostListComponent, UsersListComponent } from "./components/index.js";

const postURL = "http://jsonplaceholder.typicode.com/posts";

let postListSelector = "#post";
let postListComponent = new PostListComponent(postListSelector, postURL);

postListComponent.render();

const last10UsersURL = "http://jsonplaceholder.typicode.com/users";
let usersListSelector = "#users";
let usersListComponent = new UsersListComponent(
  usersListSelector,
  last10UsersURL
);

usersListComponent.render();
