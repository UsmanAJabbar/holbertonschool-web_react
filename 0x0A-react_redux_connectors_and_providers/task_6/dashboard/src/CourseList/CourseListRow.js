import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [isChecked, setIsChecked] = React.useState(false);

  // Keep track of whether an input:checkbox is checked WITH hooks
  // If !!checked, then color the full row with css(styles.rowChecked)
  // Master Plan: Apply conditional CSS to the parent <tr>

  const checkBoxStateHandler = () => {
    setIsChecked(!isChecked);
  }

  return (
    <tr className={ (isHeader) ? `${css(styles.headerRowCSS)}`
                               : `${css(styles.nonHeaderRowCSS)} ${ (!!isChecked) ? css(styles.rowChecked): '' }` }>
      {
        (isHeader == false)
        ? <>
            <input type="checkbox" onChange={checkBoxStateHandler} checked={isChecked} />
            <td className={ css(styles.rowSpacing, styles.rowBorder) }>{textFirstCell}</td>
            <td className={ css(styles.rowSpacing, styles.rowBorder) }>{textSecondCell}</td>
          </>
        : (!!textSecondCell) // (isHeader == true) => Check if textSecondCell exists
          ? <>
              <th>Checkbox</th>
              <th className={ css(styles.rowSpacing, styles.rowBorder) }>{textFirstCell}</th>
              <th className={ css(styles.rowSpacing, styles.rowBorder) }>{textSecondCell}</th>
            </>
          : <th className={ css(styles.rowSpacing, styles.rowBorder, styles.centerText) } id="center" colSpan={3}>{textFirstCell}</th>
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
  headerRowCSS: {
    backgroundColor: '#deb5b545'
  },
  nonHeaderRowCSS: {
    backgroundColor: '#f5f5f5ab'
  },
  rowChecked: {
      backgroundColor: '#e6e4e4'
  },
});

export default CourseListRow;
