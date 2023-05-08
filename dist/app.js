import { PostListComponent, UsersListComponent } from "./components/index.js";
import Router from "./router.js";

const configuration = [
  {
    path: "/",
    template: `<div class="container>
                <span>Route /</span>
                <ul id="posts"></ul>
                <ul id="users"></ul>
              </div>`,
  },
  {
    path: "/users",
    template: `<div class="container>
                <span>Route /users</span>
                <ul id="posts"></ul>
                <ul id="users"></ul>
              </div>`,
  },
  {
    path: "/posts",
    template: `<div class="container>
                <span>Route /posts</span>
                <ul id="posts"></ul>
                <ul id="users"></ul>
              </div>`,
  },
];

const router = new Router(configuration);
window.router = router;

/* const postURL = "http://jsonplaceholder.typicode.com/posts";

let postListSelector = "#post";
let postListComponent = new PostListComponent(postListSelector, postURL);

postListComponent.render();

const last10UsersURL = "http://jsonplaceholder.typicode.com/users";
let usersListSelector = "#users";
let usersListComponent = new UsersListComponent(
  usersListSelector,
  last10UsersURL
);

usersListComponent.render(); */
