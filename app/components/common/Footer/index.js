/**
*
* Footer
*
*/

import React from 'react';
// import styled from 'styled-components';


class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderFooterList() {
    return (
      <ul>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
        <li><a href="">AmarChitraKatha</a></li>
      </ul>
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row main-container footer-container">
          <div className="col-xs-12 col-sm-12 col-md-12 footer-first-container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h2>BEST CASHBACK, BEST DEALS & LATEST COUPONS</h2>
                <h3>Save at 500+ online websites like Amazon, Paytm, Flipkart, Snapdeal & more</h3>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 footer-list-container">
                {this.renderFooterList()}
                {this.renderFooterList()}
                {this.renderFooterList()}
                {this.renderFooterList()}
              </div>

            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 footer-second-container">
            <div className="row">
              <div className="col-xs-12 col-sm-2 col-md-2">
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About us</a></li>
                  <li><a href="">FAQs</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2">
                Terms and conditions
              </div>
              <div className="col-xs-12 col-sm-2 col-md-2">
                <span className="facebook">facebook</span>
                <span className="facebook">twitter</span>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">care</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
