import { GET_INITIAL_DATA } from './userMainContentConstants';

export const getInitialData = (users) => ({
  type: GET_INITIAL_DATA,
  data: users,
});
