/**
*
* GridTypeOne
*
*/

import React from 'react';

class GridTypeOne extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
	  return (
      <div className="gridTypeOneContainer">
        <a className="brandImage">
          <img src="img/store/americanswan.png" alt=""/>
        </a>
        <div className="brandName">AMERICAN SWAN</div>
        <div className="brandDesc">Pick out from the best apparels, shoes and accessories...</div>
        <div className="promoText">+ Get upto 20% CashBack </div>
        <a className="gridAncor">SHOP TO CROP</a>
      </div>
		);
	}
}

GridTypeOne.propTypes = {

};

export default GridTypeOne;
