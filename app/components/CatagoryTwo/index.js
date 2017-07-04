/**
*
* CatagoryTwo
*
*/

import React from 'react';
import GridTypeTwo from 'components/common/GridTypeTwo'


class CatagoryTwo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let array = [1,2,3,4,5,6,7,8]
    return (
      <section className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-7 col-md-7 col-xs-offset-0 col-sm-offset-1 col-md-offset-1">
            <h1 className="catagoryOneHead catagoryHead">OUR FAVOURITE STORES</h1>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-xs-offset-0 col-sm-offset-1 col-md-offset-1">
            <div className="row">
              {array.map((element, index)=><GridTypeTwo key={index} />)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

CatagoryTwo.propTypes = {

};

export default CatagoryTwo;
