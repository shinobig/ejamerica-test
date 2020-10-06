import { CANCEL_ADD_EDIT, SAVE_EDIT, SAVE_NEW_USER } from './addEditModalConstants';

export const cancelAddEdit = () => ({
  type: CANCEL_ADD_EDIT,
});

export const saveEdit = () => ({
  type: SAVE_EDIT,
});

export const saveNewUser = () => ({
  type: SAVE_NEW_USER,
});