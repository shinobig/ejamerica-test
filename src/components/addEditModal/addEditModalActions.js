import { CANCEL_ADD_EDIT, SAVE_EDIT, SAVE_NEW_USER, NAME_EDIT, EMAIL_EDIT, AGE_EDIT, PHONE_EDIT } from './addEditModalConstants';

export const cancelAddEdit = () => ({
  type: CANCEL_ADD_EDIT,
});

export const saveEdit = () => ({
  type: SAVE_EDIT,
});

export const saveNewUser = () => ({
  type: SAVE_NEW_USER,
});

export const nameInputHandler = (event) => ({
  type: NAME_EDIT,
  data: event.target.value,
});

export const ageInputHandler = (event) => ({
  type: AGE_EDIT,
  data: event.target.value,
});

export const emailInputHandler = (event) => ({
  type: EMAIL_EDIT,
  data: event.target.value,
});

export const phoneInputHandler = (event) => ({
  type: PHONE_EDIT,
  data: event.target.value,
});