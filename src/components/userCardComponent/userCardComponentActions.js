import { EDIT_USER } from "./userCardComponentConstants";

export const editUser = (id) => ({
  type: EDIT_USER,
  data: id,
})