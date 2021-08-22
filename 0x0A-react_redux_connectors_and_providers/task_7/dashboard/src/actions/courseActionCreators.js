import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from "./courseActionTypes";

import fetch from 'node-fetch';

const selectCourse = (index) => ({ type: SELECT_COURSE, index});
const unSelectCourse = (index) => ({ type: UNSELECT_COURSE, index});
const fetchCourseSuccess = () => ({
  type: FETCH_COURSE_SUCCESS,
  data: [
    {
      id: 1,
      name: "ES6",
      credit: 60
    },
    {
      id: 2,
      name: "Webpack",
      credit: 20
    },
    {
      id: 3,
      name: "React",
      credit: 40
    }
  ]
})
const setCourses = (data) => ({ type: FETCH_COURSE_SUCCESS, data });
const fetchCourses = () => {
  return (dispatch) => {
    fetch('./courses.json')
      .then(data => data.json())
      .then(data => dispatch(setCourses(data)))
  }
}

export {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
  fetchCourses,
};
