import React, { Component } from 'react'
import PropTypes from 'prop-types'
import View from './View'

class ImageSlider extends Component {
  state = {
    currentIndex: 0,
    isFirst: true,
    isLast: false
  }

  next = () => {
    const {images} = this.props
    this.setState(({currentIndex}) => ({
        currentIndex: ((currentIndex + 1 < images.length )) ? ++currentIndex : 0,
        isLast: currentIndex === images.length - 1,
        isFirst: false
      })
    )
  }

  previous = () => {
    const {images} = this.props
    // if this isn't the first slide, decrement the currentIndex
    // loop if set to true
    this.setState(({currentIndex}) => ({
        currentIndex: currentIndex ? --currentIndex : images.length - 1,
        isFirst: !currentIndex,
        isLast: false
      })
    )
  }

  render() {
    return (
      <View 
        images={this.props.images}
        onNext={this.next} 
        onPrevious={this.previous} 
        {...this.state} 
      />
    )
  }
}

ImageSlider.PropTypes = {
  images: PropTypes.array
}

ImageSlider.defaultProps = {
  images: [
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149535/DSC_5541.jpg',
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149535/DSC_3641.jpg',
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149535/AMH01457.jpg',
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149535/AMH01339.jpg',
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149535/AMH01226.jpg',
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149535/AMH00981.jpg',
    // 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149535/DSC_6775.jpg',
    'https://images.unsplash.com/photo-1487101173787-6010e4b663fe?dpr=1&auto=format&fit=crop&w=2155&q=60&cs=tinysrgb',
    'https://images.unsplash.com/photo-1456930266018-fda42f7404a7?dpr=1&auto=format&fit=crop&w=1525&q=60&cs=tinysrgb',
    'https://images.unsplash.com/photo-1470435933478-efeee4d10f64?dpr=1&auto=format&fit=crop&w=2134&q=60&cs=tinysrgb',
    'https://images.unsplash.com/photo-1507646278763-8b57d6bf6369?dpr=1&auto=format&fit=crop&w=1950&q=60&cs=tinysrgb',
    'https://images.unsplash.com/photo-1423768164017-3f27c066407f?dpr=1&auto=format&fit=crop&w=1950&q=60&cs=tinysrgb',
    'https://images.unsplash.com/photo-1446133132410-19df4d6610a1?dpr=1&auto=format&fit=crop&w=1950&q=60&cs=tinysrgb',
    'https://images.unsplash.com/photo-1500054702681-65e967d7c2e7?dpr=1&auto=format&fit=crop&w=1182&q=60&cs=tinysrgb'
    // 'https://drscdn.500px.org/photo/232013217/q%3D80_m%3D2000/v2?webp=true&sig=75262c9a595b36e21ae1e1757f4ce7685b21bb1eb59855ca35de7d0d60bf7888',
    // 'https://drscdn.500px.org/photo/227892975/q%3D80_m%3D2000/v2?webp=true&sig=5f24a3d0843640754722541b0bfdc5d5a6806b2b616623cc1e44ce126f3ebb29',
    // 'https://drscdn.500px.org/photo/231800547/q%3D80_m%3D2000/v2?webp=true&sig=f21dff2b6cdcdbf6bd377f216dddd5ad7c757b84f4d7efbb575e16d59593e418',
    // 'https://drscdn.500px.org/photo/109912869/q%3D80_m%3D2000_k%3D1/v2?webp=true&sig=7e75a2dcdddff7980ff731c43512afa57f8373e30fd281a808d5768b49946c9a',
    // 'https://drscdn.500px.org/photo/229531949/q%3D80_m%3D2000/v2?webp=true&sig=fcee46100be105f36fb526b906a7dbae68aa148d929fe518a0e9a610dda69271',
    // 'https://drscdn.500px.org/photo/228702647/q%3D80_m%3D1000/v2?webp=true&sig=ea3e0eacc4417ad07a8ad28162162cf18cdd6870455cdfd75d2af66022dbc4db',
  ]
}
export default ImageSlider
