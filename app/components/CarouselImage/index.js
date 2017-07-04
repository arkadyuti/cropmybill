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
      <div className="container-fluid">
        <div className="row pad20">
          <div className="col-xs-12 col-sm-7 col-md-7 col-xs-offset-0 col-sm-offset-1 col-md-offset-1">
            <div className="carousel-container">

            </div>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 col-xs-offset-0">
            <div className="carousel-side-section">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CarouselImage.propTypes = {

};

export default CarouselImage;
