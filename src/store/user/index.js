let initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-USER':
      console.log('SET-USER');
      initialState = action.payload
      return action.payload
    default:
      return state;
  }
}

export default userReducer;
