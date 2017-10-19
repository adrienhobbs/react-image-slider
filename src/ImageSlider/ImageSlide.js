import React from 'react'

const ImageSlide = ({currentIndex, slideIndex, image, imageFit}) => {
  const slideClass = (currentIndex === slideIndex) ? 'slide' : (slideIndex > currentIndex) ? 'slide right' : 'slide left'
  return (
    <div className={slideClass} >
      <img src={image} alt="" style={{objectFit: imageFit}}/>
    </div>
  )
}

export default ImageSlide