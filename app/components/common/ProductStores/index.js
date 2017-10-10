/**
*
* ProductStores
*
*/

import React from 'react';
// import styled from 'styled-components';
import GridTypeOne from 'components/common/GridTypeOne';

class ProductStores extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8]
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const { heading, subheading, productType } = this.props;
    return (
      <section className="container-fluid">
        <div className="row main-container">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h1 className="allstore-heading">{heading}</h1>
            <p className="allstore-subheading">{subheading}</p>
            <div className="filter-store-container">
              {
                alphabet.map((singleAlp, index) => {
                  return (
                    <a key={index} className="single-alphabet" href={`#${singleAlp}`}>{singleAlp}</a>
                  )
                })
              }
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="row">
              {productType === "stores" && array.map((element, index) => <GridTypeOne key={index} />)}
              {productType != "stores" && array.map((element, index) => <GridTypeOne key={index} />)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ProductStores.propTypes = {

};

export default ProductStores;
