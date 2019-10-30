import { Action } from 'redux-starter-kit';
import { ThunkAction } from 'redux-thunk';
import { actions } from '.';
import getEmployeesApi from '../../api';
import { State } from './state';

type AppAction = ThunkAction<void, State, null, Action<string>>;

const getEmployees = (): AppAction => async (dispatch) => {
  dispatch(actions.getEmployees());
  const employees = await getEmployeesApi();
  dispatch(actions.resolveEmployees(employees));
};

export default null;
export {
  getEmployees,
};
