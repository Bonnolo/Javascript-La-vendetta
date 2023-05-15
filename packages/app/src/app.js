import {
  CommentsListComponent,
  PostListComponent,
  UsersListComponent,
} from "@mohole-js-02/components";
import "./scss/app.scss";
import Router from "./router.js";

const configuration = [
  {
    path: "/",
    template: `<div class="container">
                    <span>Route /</span>
                    <ul id="posts"></ul>
                    <ul id="users"></ul>
                  </div>`,
    loadComponents: () => {},
  },
  {
    path: "/users",
    template: `<div class="container">
                    <span>Route /users</span>
                    <ul id="users"></ul>
                  </div>`,
    loadComponents: () => {
      const last10UsersURL = "http://jsonplaceholder.typicode.com/users";
      let usersListSelector = "#users";

      let usersListComponent = new UsersListComponent(
        usersListSelector,
        last10UsersURL
      );
      usersListComponent.render();
    },
  },
  {
    path: "/posts",
    template: `<div class="container">
                    <span>Route /posts</span>
                    <ul id="posts"></ul>
                  </div>`,
    loadComponents: () => {
      const postsURL = "http://jsonplaceholder.typicode.com/posts";
      let postListSelector = "#posts";

      let postListComponent = new PostListComponent(postListSelector, postsURL);
      postListComponent.render();
    },
  },
];

const router = new Router(configuration);
window.router = router;
/*
const postsURL = 'http://jsonplaceholder.typicode.com/posts';
let postListSelector = '#post'

let postListComponent = new PostListComponent(postListSelector, postsURL);
postListComponent.render()

const last10UsersURL = 'http://jsonplaceholder.typicode.com/users';
let usersListSelector = '#users'

let usersListComponent = new UsersListComponent(usersListSelector, last10UsersURL)
usersListComponent.render()

const commentsURL = 'https://jsonplaceholder.typicode.com/posts/1/comments'
let commentsListSelector = '#comments'

let commentsListComponent = new CommentsListComponent(commentsListSelector, commentsURL)
commentsListComponent.render()
*/
