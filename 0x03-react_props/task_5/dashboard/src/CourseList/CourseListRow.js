import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {
        (isHeader == false) ? <>
                                <td>{textFirstCell}</td>
                                <td>{textSecondCell}</td>
                              </>:
                                    (isHeader == true && textSecondCell) ?
                                      <>
                                        <th>{textFirstCell}</th>
                                        <th>{textSecondCell}</th>
                                      </>:
                                      <th id="center" colSpan={2}>{textFirstCell}</th>
      }
    </tr>
  )
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: '',
}
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
}

export default CourseListRow;
