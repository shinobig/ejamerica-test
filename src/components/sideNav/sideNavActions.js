import { SHOW_ALL_USERS, ADD_NEW_USER, DELETE_ALL_USERS, CREATE_RANDOM_USER } from './sideNavConstants';

export const showAllUsers = () => ({
  type: SHOW_ALL_USERS,
});

export const addNewUser = () => ({
  type: ADD_NEW_USER,
})

export const deleteAllUsers = () => ({
  type: DELETE_ALL_USERS,
})

export const createRandomUser = () => ({
  type: CREATE_RANDOM_USER,
})