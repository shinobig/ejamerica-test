import { DELETE_ALL_USERS, SHOW_ALL_USERS, ADD_NEW_USER, CREATE_RANDOM_USER } from '../sideNav/sideNavConstants';
import { EDIT_USER } from '../userCardComponent/userCardComponentConstants';
import { CANCEL_ADD_EDIT, SAVE_EDIT, SAVE_NEW_USER, NAME_EDIT, EMAIL_EDIT, AGE_EDIT, PHONE_EDIT, RELOCATION_EDIT, DELETE_USER } from '../addEditModal/addEditModalConstants';
import { listOfUsers } from '../../model/databaseCreation/listOfUsers';
import { validateName } from '../utils/auth';
import { validateAge } from '../utils/ageAuth';
import { validateEmail } from '../utils/emailAuth';
import { validatePhone } from '../utils/phoneAuth';
import { createRandomUser } from '../utils/newRandomUser';

export const userInformationReducer = (state = {
  allUsers: [...listOfUsers],
  usersToDisplay: [],
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

      let newUserId;
      if (state.allUsers.length > 0) {
        newUserId = state.allUsers[state.allUsers.length - 1].id + 1
      } else {
        newUserId = 1;
      }
      return {
        ...state,
        editableUser: {
          id: newUserId,
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
      let newRandomUser
      if (state.allUsers.length > 0) {
        newRandomUser = createRandomUser(state.allUsers[state.allUsers.length - 1].id);
      } else {
        newRandomUser = createRandomUser(0);
      }
      let allUsersWithRandom = [...state.allUsers];
      allUsersWithRandom.push(newRandomUser);
      let allusersReversed = [...allUsersWithRandom]
      return {
        ...state,
        allUsers: allUsersWithRandom,
        usersToDisplay: [...allusersReversed.reverse()],
      }
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
        modalType: '',
        errors: [],
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
    case RELOCATION_EDIT:
      let relocationStatus = {
        ...state.editableUser,
        relocation: !state.editableUser.relocation,
      };
      return {
        ...state,
        editableUser: relocationStatus,
      }
    case DELETE_USER:
      let allUsersWithDelete = [...state.allUsers];
      allUsersWithDelete.splice(allUsersWithDelete.findIndex(user => user.id === action.data), 1);
      let allUsersWithDeleteReversed = [...allUsersWithDelete];
      return {
        ...state,
        allUsers: allUsersWithDelete,
        usersToDisplay: [...allUsersWithDeleteReversed.reverse()],
        editableUser: {},
        showAddEditModal: false,
        modalType: '',
        errors: [],
      }
    case SAVE_EDIT:
      // Validate username
      const { nameErrors, validName } = validateName(state.editableUser.name);
      // Validate age
      const { ageError, validAge } = validateAge(state.editableUser.age);
      // Validate email
      const { emailErrors, validEmail } = validateEmail(state.editableUser.email);
      // Validate Phone
      const { phoneErrors, validPhone } = validatePhone(state.editableUser.phoneNumber);
      if (validName && validAge && validEmail && validPhone) {
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
        const pushEditErrorsHandler = (errorHandler) => {
          if (errorHandler.length > 0) {
            allErrors.push(errorHandler)
          }
        }
        pushEditErrorsHandler(nameErrors);
        pushEditErrorsHandler(ageError);
        pushEditErrorsHandler(emailErrors);
        pushEditErrorsHandler(phoneErrors);
        return {
          ...state,
          errors: [...allErrors]
        }
      }
    case SAVE_NEW_USER:
      // Validate username
      const newValidName = { ...validateName(state.editableUser.name) }
      // Validate age
      const newValidAge = { ...validateAge(state.editableUser.age) }
      // Validate email
      const newValidEmail = { ...validateEmail(state.editableUser.email) }
      // Validate Phone
      const newValidPhone = { ...validatePhone(state.editableUser.phoneNumber) }
      if (newValidName.validName && newValidAge.validAge && newValidEmail.validEmail && newValidPhone.validPhone) {
        const allUsersWithNew = [...state.allUsers];
        allUsersWithNew.push(state.editableUser);
        let allUsersWithNewReverse = [...allUsersWithNew];
        return {
          ...state,
          allUsers: allUsersWithNew,
          usersToDisplay: [...allUsersWithNewReverse.reverse()],
          showAddEditModal: false,
          modalType: '',
          editableUser: {},
          errors: [],
        }
      } else {

        let allErrors = [];
        const pushNewErrorsHandler = (errorHandler) => {
          if (errorHandler.length > 0) {
            allErrors.push(errorHandler)
          }
        }
        pushNewErrorsHandler(newValidName.nameErrors);
        pushNewErrorsHandler(newValidAge.ageError);
        pushNewErrorsHandler(newValidEmail.emailErrors);
        pushNewErrorsHandler(newValidPhone.phoneErrors);
        return {
          ...state,
          errors: [...allErrors]
        }
      }
    default:
      return state;
  }
}