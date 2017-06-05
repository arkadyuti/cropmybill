/**
*
* CatagoryOne
*
*/

import React from 'react';
import GridTypeOne from 'components/common/GridTypeOne'
// import styled from 'styled-components';


class CatagoryOne extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let array = [1,2,3,4,5,6,7,8]
    return (
      <section className="catagoryOneWrapper centerMe clearfix">
        <h1 className="catagoryOneHead catagoryHead">OUR CLOTHING STORES</h1>
        {array.map((element, index)=><GridTypeOne key={index} />)}
      </section>
    );
  }
}

CatagoryOne.propTypes = {

};

export default CatagoryOne;
