export const setProducts = (data) => {
  return {
    type: 'TEST',
    payload: data,
  }
}

export const setActiveCourse = (data) => {
  return {
    type: 'setActiveCourse',
    payload: data,
  }
}

export const addEnrolledCourse = (course) => {
  return {
    type: 'addEnrolledCourse',
    payload: course,
  }
}

