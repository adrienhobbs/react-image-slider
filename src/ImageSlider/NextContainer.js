import React from 'react'
import PropTypes from 'prop-types'
import NextButton from './NextButton'

const NextContainer = ({onNext, Next, disabled}) => (
  <span onClick={onNext} className={disabled ? "next-btn slider-btn disabled" : "next-btn slider-btn"}>
    <Next />
  </span>
)

NextContainer.propTypes = {
  next: PropTypes.element,
  onNext: PropTypes.func
}

NextContainer.defaultProps = {
  Next: NextButton
}

export default NextContainer
