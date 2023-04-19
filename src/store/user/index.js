let initialState = {};

const userReducer = (state = initialState, action) => {
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
