import axios from 'axios';

//=============COURSE ACTIONS=============
export const setCourses = (data) => {
  return {
    type: 'SET-COURSES',
    payload: data,
  }
}

export const getCourses = () => async (dispatch, getState) => {
  let response = await axios.get(`http://localhost:3001/course`);
  dispatch(setCourses(response.data));
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
  let response = await axios.get(`http://localhost:3001/user/${user.email}`);
  if (response.data === null){
    response = await axios.post('http://localhost:3001/user', user);
  }
  dispatch(setUser(response.data));
}

export const addEnrolledCourse = (courseId, email) => async (dispatch, getState) => {
  console.log('addEnrolledCourse');
  let user = await axios.get(`http://localhost:3001/user/${email}`);
  console.log(user.data)
  console.log(courseId);
  user.data.activeCourses.push(courseId);
  console.log(user.data)
  let response = await axios.put(`http://localhost:3001/user/${user.data._id}`, user.data);
  console.log(response.data);
  dispatch(setUser(response.data));
}
