import { ActionCreatorWithoutPayload } from 'redux-starter-kit';
import {
  getEmployees,
  resolveEmployees,
  rejectEmployees,
  setSelected,
} from './reducers';
import defaultState, { State } from './state';

const action = { type: 'NONE' } as ActionCreatorWithoutPayload;

describe('getEmployees()', () => {
  const state: State = {
    ...defaultState,
    collection: [
      {
        key: '1',
        firstName: 'Name 1',
        surname: 'Surname 1',
        age: 1,
      },
    ],
  };
  const newState: State = getEmployees(state, action) || state;
  it('resets collection and sets pending status to true', () => {
    expect(newState.collection.length).toEqual(0);
    expect(newState.status.pending).toBeTruthy();
  });
});

describe('resolveEmployees()', () => {
  const state: State = defaultState;
  const payload = [
    {
      key: '1',
      firstName: 'Name 1',
      surname: 'Surname 1',
      age: 1,
    },
  ];
  const newState: State = resolveEmployees(state, { ...action, payload }) || state;
  it('set collection and sets pending status to false', () => {
    expect(newState.collection.length).toEqual(1);
    expect(newState.status.pending).toBeFalsy();
  });
});

describe('rejectEmployees()', () => {
  const state: State = defaultState;
  const newState: State = rejectEmployees(state, action) || state;
  it('sets pending status to false', () => {
    expect(newState.status.pending).toBeFalsy();
  });
});


describe('setSelected()', () => {
  const state: State = defaultState;
  const payload = ['1'];
  const newState: State = setSelected(state, { ...action, payload }) || state;
  it('set selected ids', () => {
    expect(newState.selected.length).toEqual(1);
  });
});
