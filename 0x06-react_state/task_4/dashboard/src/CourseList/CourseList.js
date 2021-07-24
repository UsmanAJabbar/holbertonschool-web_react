import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

// import './CourseList.css';

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.CourseList, styles.rowBorder)}>
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
          (!listCourses.length)
          ? <CourseListRow textFirstCell={'No course available yet'} />
          : listCourses.map(({id, name, credit}) => 
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

const styles = StyleSheet.create({
  CourseList: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20px',
    width: '1100px',
    maxWidth: '80%',
    borderCollapse: 'collapse',
  },
  leftText: {
    textAlign: 'left',
  },
  rowBorder: {
    border: '1px solid #dbdbdb',
  },
  table: {
      borderCollapse: 'collapse',
  },
});


export default CourseList;
