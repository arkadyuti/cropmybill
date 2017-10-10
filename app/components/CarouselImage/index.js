/**
*
* CarouselImage
*
*/

import React from 'react';
import Swiper from 'react-id-swiper';
// import styled from 'styled-components';


class CarouselImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="container-fluid">
        <div className="row main-container">
          <div className="col-xs-12 col-sm-7 col-md-7 col-xs-offset-0 col-sm-offset-1 col-md-offset-1 carousel-container">
            <div className="">
              <Swiper>
                <div>
                  <img src="img/banner1.jpg" alt="" />
                </div>
                <div>
                  <img src="img/banner2.jpg" alt="" />
                </div>
              </Swiper>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-3 col-xs-offset-0 carousel-side-section">
            <div className="">
              <a href="#"><div className="side-deals"></div></a>
              <a href="#"><div className="side-coupons"></div></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

CarouselImage.propTypes = {

};

export default CarouselImage;
