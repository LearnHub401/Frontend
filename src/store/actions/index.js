import axios from 'axios';
let apiServer = process.env.REACT_APP_BACKEND_API

//=============COURSE ACTIONS=============
export const setCourses = (data) => {
  return {
    type: 'SET-COURSES',
    payload: data,
  }
}

export const getCourses = () => async (dispatch, getState) => {
  let response = await axios.get(`${apiServer}/course`);
  dispatch(setCourses(response.data));
}

export const addCourse = (course, email) => async (dispatch, getState) => {
  let newCourse = await axios.post(`${apiServer}/course`, course);
  dispatch(addCourseToUser(newCourse.data._id, email))
  dispatch(setCourses([newCourse.data]));
}

export const updateCourse = (course_id, course) => async (dispatch, getState) => {
  await axios.put(`${apiServer}/course/${course_id}`, course);
  dispatch(getCourses());
}

export const filterCourse = (data) => {
  return {
    type: 'FILTER-COURSE',
    payload: data,
  }
}

// =============USER ACTIONS=============
export const setUser = (data) => {
  return {
    type: 'SET-USER',
    payload: data,
  }
}

export const getUser = (user) => async (dispatch, getState) => {
  let response = await axios.get(`${apiServer}/user/${user.email}`);
  if (response.data === null){
    response = await axios.post(`${apiServer}/user`, user);
  }
  dispatch(setUser(response.data));
}

export const addEnrolledCourse = (courseId, email) => async (dispatch, getState) => {
  let user = await axios.get(`${apiServer}/user/${email}`);
  user.data.activeCourses.push(courseId);
  let response = await axios.put(`${apiServer}/user/${user.data._id}`, user.data);
  dispatch(setUser(response.data));
}

export const addCourseToUser = (courseId, email) => async (dispatch, getState) => {
  let user = await axios.get(`${apiServer}/user/${email}`);
  user.data.courses.push(courseId);
  let response = await axios.put(`${apiServer}/user/${user.data._id}`, user.data);
  dispatch(setUser(response.data));
}
