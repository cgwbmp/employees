import {
  getEmployees,
  isPending,
  getSelected,
} from './selectors';
import defaultState, { State } from './state';

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
  const result: typeof state.collection = getEmployees(state);
  it('returns employees collection', () => {
    expect(result.length).toEqual(1);
  });
});

describe('isPending()', () => {
  const state: State = {
    ...defaultState,
    status: {
      pending: true,
      error: false,
    },
  };
  const result: boolean = isPending(state);
  it('returns boolean value of pending status', () => {
    expect(result).toBeTruthy();
  });
});

describe('getSelected()', () => {
  const state: State = {
    ...defaultState,
    collection: [
      {
        key: '1',
        firstName: 'Name 1',
        surname: 'Surname 1',
        age: 1,
      },
      {
        key: '2',
        firstName: 'Name 2',
        surname: 'Surname 2',
        age: 2,
      },
    ],
    selected: ['2'],
  };
  const result: typeof state.collection = getSelected(state);
  it('returns employees collection filtered by selected ids', () => {
    expect(result.length).toEqual(1);
    expect(result[0].key).toEqual('2');
  });
});
