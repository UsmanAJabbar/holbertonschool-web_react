import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true}
                       textFirstCell="Available courses"
        />
        <CourseListRow isHeader={true}
                       textFirstCell="Course name"
                       textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {
          (!listCourses.length) ? <CourseListRow textFirstCell={'No course available yet'} />:
                                  listCourses.map(({id, name, credit}) => 
                                    <CourseListRow key={id}
                                                   textFirstCell={name}
                                                   textSecondCell={credit}
                                    />)
        }
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: []
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}

export default CourseList;