import { UsersListComponent } from "@mohole-js-02/components";

const render = () => {
  const last10UsersURL = "http://jsonplaceholder.typicode.com/users";
  let usersListSelector = "#users";

  let usersListComponent = new UsersListComponent(
    usersListSelector,
    last10UsersURL
  );
  usersListComponent.render();
};

export { render };
