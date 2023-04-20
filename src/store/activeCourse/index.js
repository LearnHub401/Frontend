let initialState = {};

const activeCourseReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FILTER-COURSE':
      initialState = payload
      return payload
    default:
      return state;
  }
}

export default activeCourseReducer;
