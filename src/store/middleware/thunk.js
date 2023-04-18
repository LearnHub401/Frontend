const thunk = (store) => (next) => (actionOrFunction) => {
  console.log('thunk');
  typeof(actionOrFunction) === 'function'
  ? actionOrFunction(store.dispatch, store.getState)
  : next(actionOrFunction)
};

export default thunk;
