let initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-COURSES':
      console.log('SET-COURSES');
      initialState = action.payload
      return action.payload
    default:
      return state;
  }
}

export default courseReducer;
