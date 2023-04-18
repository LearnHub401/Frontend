let initialState = {
  userName: 'Martin Hansen',
  _id: 'testid',
  password: 'pass1234',
  email: 'marrtt1234@gmail.com',
  createdCourses: [
    'test course _id',
  ],
  enrolledCourses: [
    {
      courseId: 'test course _id',
      complete: false,
    }
  ],
}

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'Test':
      return state;
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
