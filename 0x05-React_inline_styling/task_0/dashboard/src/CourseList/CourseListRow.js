import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={ (isHeader) ? headerRowCSS
                           : nonHeaderRowCSS }>
      {
        (isHeader == false)
        ? <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </>
        : (isHeader == true && textSecondCell)
          ? <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
            </>
          : <th id="center" colSpan={2}>{textFirstCell}</th>
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

const headerRowCSS = {
  backgroundColor: '#deb5b545'
}
const nonHeaderRowCSS = {
  backgroundColor: '#f5f5f5ab'
}

export default CourseListRow;
