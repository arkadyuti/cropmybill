/**
*
* CarouselImage
*
*/

import React from 'react';
import Carousel from 'nuka-carousel';
// import styled from 'styled-components';


class CarouselImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="width100 clearfix">
        <div className="carouselWrapper centerMe clearfix">
          <div className="carouselContainer border_00 centerMe">
            <Carousel autoplay={true} wrapAround={true}>
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

CarouselImage.propTypes = {

};

export default CarouselImage;
