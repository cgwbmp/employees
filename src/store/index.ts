import { configureStore } from 'redux-starter-kit';
import employees from './employees';

const store = configureStore({
  reducer: employees,
});

export default store;
