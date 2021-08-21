import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
  SET_COURSES
} from "./courseActionTypes";
import * as coursesJSON from '../../dist/courses.json';

const ping = (any) => {
  const response = {
      json: () => coursesJSON
  }
  return new Promise((resolve, reject) => {
      if (!coursesJSON) reject("Bad connection");
      setTimeout(() => {
          resolve(response);
      }, 250);
  });
}

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
const setCourses = (data) => ({ type: SET_COURSES, data });
const fetchCourses = () => {
  const promise = ping();
  return (dispatch) => {
    promise
      .then(data => data.json())
      .then((data) => dispatch(setCourses(data)))
  }
}

export {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
  fetchCourses,
  ping
};
