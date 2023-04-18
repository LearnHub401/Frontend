let initialState = [];

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case 'SET-COURSES':
      console.log('SET-COURSES', type);
      initialState = payload
      return payload
    case 'setActiveCourse':
      return {
        ...state,
        activeCourse: payload,
      }
    default:
      return state;
  }
}

export default courseReducer;
