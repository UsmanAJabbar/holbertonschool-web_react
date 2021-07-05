import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader == true && textSecondCell) {
    return (
              <tr>
                <th>{textFirstCell}</th>
                <th>{textSecondCell}</th>
              </tr>
           )
  }
  if (isHeader == false) {
    return (
              <tr>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
              </tr>
           )
  }
  return (<tr><th colSpan={2}>{textFirstCell}</th></tr>)
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
}

export default CourseListRow;
