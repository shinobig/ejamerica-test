
import { GET_INITIAL_DATA } from './userMainContentConstants';
import { DELETE_ALL_USERS, SHOW_ALL_USERS, ADD_NEW_USER, CREATE_RANDOM_USER } from '../sideNav/sideNavConstants';

export const userInformationReducer = (state = {
  allUsers: [],
  filteredUsers: [],
  usersToDisplay: [],
  editableUser: [],
  showAddEditModal: true,
}, action) => {
  switch (action.type) {
    case GET_INITIAL_DATA:
      let allUsersInArray = [...action.data];
      return {
        ...state,
        allUsers: allUsersInArray,
        filteredUsers: allUsersInArray,
      };
    case SHOW_ALL_USERS:
      console.log('show all users')
      let displayAllUsers = [...state.filteredUsers]
      return {
        ...state,
        usersToDisplay: displayAllUsers
      };
    case DELETE_ALL_USERS:
      let noUsers = []
      return {
        ...state,
        allUsers: noUsers,
        usersToDisplay: noUsers,
      };
    case ADD_NEW_USER:
      console.log(state);
      break;
    case CREATE_RANDOM_USER:
      console.log(state);
      break;
    default:
      return state;
  }
}