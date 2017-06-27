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
      <section className="catagoryOneWrapper centerMe clearfix">
        <h1 className="catagoryOneHead catagoryHead">OUR FAVOURITE STORES</h1>
        {array.map((element, index)=><GridTypeTwo key={index} />)}
      </section>
    );
  }
}

CatagoryTwo.propTypes = {

};

export default CatagoryTwo;
