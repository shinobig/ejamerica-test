// Here I will call an API fetch and add some data that it's not in this API (age, relocation), to simulate a database
import axios from '../axios-config/axios-config'
import { store } from '../../index';
import { getInitialData } from '../../components/usersMainContent/userMainContentActions';

export const initialData = () => {
  axios.get('/users')
    .then(response => {
      let initialData = response.data.map(user => {
        const userWithData = {
          ...user,
          age: Math.floor(Math.random() * 100),
          relocation: false,
        }
        return userWithData
      })
      store.dispatch(getInitialData(initialData));
    })
    .catch(error => console.log(error))
}
