import { CaseReducer, ActionCreatorWithOptionalPayload } from 'redux-starter-kit';
import { State } from './state';

const getEmployees: CaseReducer<State, ActionCreatorWithOptionalPayload<State>> = (state) => ({
  ...state,
  collection: [],
  status: {
    pending: true,
    error: false,
  },
});

const resolveEmployees: CaseReducer<State> = (state, action) => ({
  ...state,
  collection: action.payload,
  status: {
    pending: false,
    error: false,
  },
});

const rejectEmployees: CaseReducer<State, ActionCreatorWithOptionalPayload<State>> = (state) => ({
  ...state,
  status: {
    pending: false,
    error: true,
  },
});

const setSelected: CaseReducer<State> = (state, action) => ({
  ...state,
  selected: action.payload,
});

export {
  getEmployees,
  resolveEmployees,
  rejectEmployees,
  setSelected,
};
