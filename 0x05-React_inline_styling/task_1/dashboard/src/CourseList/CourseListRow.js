import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr style={ (isHeader) ? headerRowCSS
                           : nonHeaderRowCSS }>
      {
        (isHeader == false)
        ? <>
            <td className={ css(styles.rowSpacing, styles.rowBorder) }>{textFirstCell}</td>
            <td className={ css(styles.rowSpacing, styles.rowBorder) }>{textSecondCell}</td>
          </>
        : (isHeader == true && textSecondCell)
          ? <>
              <th className={ css(styles.rowSpacing, styles.rowBorder) }>{textFirstCell}</th>
              <th className={ css(styles.rowSpacing, styles.rowBorder) }>{textSecondCell}</th>
            </>
          :   <th className={ css(styles.rowSpacing, styles.rowBorder, styles.centerText) } id="center" colSpan={2}>{textFirstCell}</th>
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

const styles = StyleSheet.create({
  rowSpacing: {
    padding: '5px'
  },
  rowBorder: {
    border: '1px solid #dbdbdb',
  },
  centerText: {
    textAlign: 'center',
  },
});

const headerRowCSS = {
  backgroundColor: '#deb5b545'
}
const nonHeaderRowCSS = {
  backgroundColor: '#f5f5f5ab'
}

export default CourseListRow;
