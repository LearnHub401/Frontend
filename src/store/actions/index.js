import axios from 'axios';

//=============COURSE ACTIONS=============
export const setCourses = (data) => {
  console.log('setCourse');
  return {
    type: 'SET-COURSES',
    payload: data,
  }
}

export const getCourses = () => async (dispatch, getState) => {
  console.log('getCourses');
  let response = await axios.get(`http://localhost:3001/course`);
  dispatch(setCourses(response.data));
}

export const focusCourse = (courseID) => {
  return {
    type: 'FOCUS-COURSES',
    payload: courseID,
  }
}
// =============USER ACTIONS=============
export const setUser = (data) => {
  console.log('setUser');
  return {
    type: 'SET-USER',
    payload: data,
  }
}

export const getUser = (user) => async (dispatch, getState) => {
  console.log('getUser');
  let response = await axios.get(`http://localhost:3001/user/${user.email}`);
  if (response.data === null){
    response = await axios.post('http://localhost:3001/user', user);
  }
  dispatch(setUser(response.data));
}
