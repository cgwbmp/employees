import { State } from './state';

const getEmployees = (state: State): typeof state.collection => state.collection;

const isPending = (state: State): boolean => state.status.pending;

const getSelected = (state: State): typeof state.collection => {
  const { selected, collection } = state;
  return collection.filter(({ key }) => selected.includes(key));
};

export {
  getEmployees,
  isPending,
  getSelected,
};
