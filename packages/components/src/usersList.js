import ListComponent from "./list.js"
import UserComponent from "./user.js"

class UsersListComponent extends ListComponent {

    createComponent(item) {
        return new UserComponent(item)
    }
}

export default UsersListComponent;