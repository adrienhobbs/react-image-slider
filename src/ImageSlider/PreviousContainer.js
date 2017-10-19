import React from 'react'
import PropTypes from 'prop-types'
import PreviousButton from './PreviousButton'

const PreviousContainer = ({onPrevious, Previous, disabled}) => (
  <span onClick={onPrevious} className={disabled ? "previous-btn slider-btn disabled" : "previous-btn slider-btn"}><Previous {...this.props} /></span>
)

PreviousContainer.propTypes = {
  Previous: PropTypes.func,
  onPrevious: PropTypes.func
}

PreviousContainer.defaultProps = {
  Previous: PreviousButton
}

export default PreviousContainer
