/* eslint-disable */
import { DELETE_ALL_USERS, SHOW_ALL_USERS, ADD_NEW_USER, CREATE_RANDOM_USER } from '../sideNav/sideNavConstants';
import { EDIT_USER } from '../userCardComponent/userCardComponentConstants';
import { CANCEL_ADD_EDIT, SAVE_EDIT, SAVE_NEW_USER, NAME_EDIT, EMAIL_EDIT, AGE_EDIT, PHONE_EDIT } from '../addEditModal/addEditModalConstants';
import { listOfUsers } from '../../model/databaseCreation/listOfUsers';
import { validateName } from '../utils/auth';
import { validateAge } from '../utils/ageAuth';

export const userInformationReducer = (state = {
  allUsers: [...listOfUsers],
  usersToDisplay: [...listOfUsers.reverse()],
  editableUser: {},
  showAddEditModal: false,
  modalType: '',
  errors: [],
}, action) => {
  switch (action.type) {
    case SHOW_ALL_USERS:
      const reverseUsers = [...state.allUsers]
      const displayAllUsers = [...reverseUsers.reverse()];
      return {
        ...state,
        usersToDisplay: displayAllUsers
      };
    case DELETE_ALL_USERS:
      const noUsers = []
      return {
        ...state,
        allUsers: noUsers,
        usersToDisplay: noUsers,
      };
    case ADD_NEW_USER:
      return {
        ...state,
        editableUser: {
          id: (state.allUsers[state.allUsers.length - 1].id + 1),
          name: '',
          age: '',
          email: '',
          relocation: true,
          imageURL: "https://picsum.photos/300?random&rnd" + +new Date().getTime(),
          phoneNumber: '',
        },
        showAddEditModal: true,
        modalType: 'newUser'
      }
    case CREATE_RANDOM_USER:
      return state;
      break;
    case EDIT_USER:
      const foundUser = state.allUsers.filter(user => user.id === action.data);
      return {
        ...state,
        editableUser: { ...foundUser[0] },
        showAddEditModal: true,
        modalType: 'editUser'
      }
    case CANCEL_ADD_EDIT:
      return {
        ...state,
        showAddEditModal: false,
        modalType: ''
      }
    case NAME_EDIT:
      let editableUser = {
        ...state.editableUser,
        name: action.data
      };
      return {
        ...state,
        editableUser: editableUser,
      }
    case AGE_EDIT:
      let editAge = {
        ...state.editableUser,
        age: action.data
      };
      return {
        ...state,
        editableUser: editAge,
      }
    case EMAIL_EDIT:
      let editMail = {
        ...state.editableUser,
        email: action.data
      };
      return {
        ...state,
        editableUser: editMail,
      }
    case PHONE_EDIT:
      let editPhone = {
        ...state.editableUser,
        phoneNumber: action.data.replace(/[^0-9]/g, ''),
      };
      return {
        ...state,
        editableUser: editPhone,
      }
    case SAVE_EDIT:
      // Validate username
      const { nameErrors, validName } = validateName(state.editableUser.name);
      // Validate age
      const { ageError, validAge } = validateAge(state.editableUser.age);
      if (validName && validAge) {
        let allUsersReplace = [...state.allUsers];
        allUsersReplace[allUsersReplace.findIndex(user => user.id === state.editableUser.id)] = { ...state.editableUser };

        return {
          ...state,
          usersToDisplay: allUsersReplace,
          allUsers: allUsersReplace,
          editableUser: {},
          showAddEditModal: false,
          modalType: '',
          errors: [],
        }
      } else {

        let allErrors = [];
        if (nameErrors.length > 0) {
          allErrors.push(nameErrors);
        }
        if (ageError.length) {
          allErrors.push(ageError);
        }
        return {
          ...state,
          errors: [...allErrors]
        }
      }

      /*
            let allUsersReplace = [...state.allUsers];
            allUsersReplace[allUsersReplace.findIndex(user => user.id === state.editableUser.id)] = { ...state.editableUser };
      
            return {
              ...state,
              usersToDisplay: allUsersReplace,
              allUsers: allUsersReplace,
              editableUser: {},
              showAddEditModal: false,
              modalType: ''
            }*/
      return state;
    case SAVE_NEW_USER:
      const allUsersWithNew = [...state.allUsers];
      allUsersWithNew.push(state.editableUser);
      return {
        ...state,
        allUsers: allUsersWithNew,
        usersToDisplay: allUsersWithNew.reverse(),
        showAddEditModal: false,
        modalType: '',
        editableUser: {},
      }
    default:
      return state;
  }
}