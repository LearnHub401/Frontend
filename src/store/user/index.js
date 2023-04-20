let initialState = {};

const userReducer = (state = initialState, action) => {
  
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action;

  switch (action.type) {
    case 'SET-USER':
      initialState = payload
      return payload
    default:
      return state;
  }
}

export default userReducer;
