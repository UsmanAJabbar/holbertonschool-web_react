import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import {
  fetchCourses,
  selectCourse,
  unSelectCourse
} from '../actions/courseActionCreators';
import { getCourses } from '../selectors/courseSelector';

import CourseListRow from './CourseListRow';

class CourseList extends React.Component {
  constructor (props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount () {
    this.props?.fetchCourses();
  }

  onChangeRow (id, checked) {
    return (!!checked) ? this.props.selectCourse(id) : this.props.unSelectCourse(id)
  }

  render () {
    const { listCourses } = this.props;
    return (
      <table className={css(styles.CourseList, styles.rowBorder)}>
        <thead>
          <CourseListRow isHeader={true} textFirstCell="Available courses" />
          <CourseListRow 
            isHeader={true}
            textFirstCell="Course name"
            textSecondCell="Credit"
          />
        </thead>
        <tbody>
          {
            (!listCourses)
              ? <CourseListRow textFirstCell={'No course available yet'} />
              : listCourses.map(({id, name, credit, isSelected}) => 
                  <CourseListRow
                    key={id}
                    id={id}
                    textFirstCell={name}
                    textSecondCell={credit}
                    isChecked={isSelected}
                    onChangeRow={this.onChangeRow}
                  />
                )
          }
        </tbody>
      </table>
    );
  }
}

CourseList.defaultProps = {
  listCourses: []
}
CourseList.propTypes = {
  listCourses: PropTypes.oneOfType([
    PropTypes.array, PropTypes.object
  ]),
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

const mapStateToProps = (state) => ({
  listCourses: getCourses(state)
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
export { CourseList as newCourse };
