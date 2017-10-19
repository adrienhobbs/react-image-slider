import React from 'react'
import PropTypes from 'prop-types'
import Next from './NextContainer'
import Previous from './PreviousContainer'
import ImageSlide from './ImageSlide'

const View = ({
  onPrevious, onNext, images, currentIndex,
  backgroundColor, fullscreen, height,
  isLast, isFirst
}) => (
  <div className="image-slider" style={{height: fullscreen ? '100vh' : height, backgroundColor}}>
    {images.map((image, i) => <ImageSlide key={image} currentIndex={currentIndex} slideIndex={i} image={image} />)}
    <Previous disabled={isFirst} onPrevious={onPrevious} />
    <Next disabled={(isLast)} onNext={onNext} />
    <div style={{position: 'absolute', right: 10, bottom: 0, color: 'white'}}>{`${currentIndex + 1}/${images.length} ${isLast}`}</div>
    {isFirst}
  </div>
)

ImageSlide.defaultProps = {
  imageFit: 'contain',
}

View.defaultProps = {
  backgroundColor: "rgb(37, 37, 37)",
  fullscreen: true,
}

export default View

