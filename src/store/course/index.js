let initialState = [];

const courseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case 'SET-COURSES':
      return payload
    case 'FILTER-COURSE':
      return state.filter(e => e._id === payload)
    default:
      return state;
  }
}

export default courseReducer;
