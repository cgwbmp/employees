import { Employee } from '../../types';

export interface State {
  collection: Array<Employee>,
  status: {
    pending: boolean,
    error: boolean,
  },
  selected: Array<string>,
}

const initialState: State = {
  collection: [],
  status: {
    pending: false,
    error: false,
  },
  selected: [],
};

export default initialState;
