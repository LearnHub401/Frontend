let initialState = {};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case 'SET-USER':
      console.log('SET-USER', type);
      initialState = payload
      return payload
    case 'addEnrolledCourse':
      return {
        ...state,
        enrolledCourses: [...state.enrolledCourses, payload],
      }
    default:
      return state;
  }
}

export default userReducer;
