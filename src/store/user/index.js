let initialState = {
  userName: 'Martin Hansen',
  _id: 'testid',
  password: 'pass1234',
  email: 'marrtt1234@gmail.com',
  courses: [
    'test course _id',
  ],
  activeCourses: [
    {
      courseId: 'test course _id',
      complete: false,
    }
  ],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Test':
      return state;
    default:
      return state;
  }
}

export default userReducer;
