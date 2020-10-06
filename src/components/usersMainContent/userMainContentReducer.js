
import { GET_INITIAL_DATA } from './userMainContentConstants';
import { SHOW_ALL_USERS } from '../sideNav/sideNavConstants';

export const userInformationReducer = (state = {
  allUsers: [],
  filteredUsers: [],
  usersToDisplay: [],
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
    default:
      return state;
  }
}