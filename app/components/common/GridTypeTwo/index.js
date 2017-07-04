/**
*
* GridTypeTwo
*
*/

import React from 'react';

class GridTypeTwo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
	    return (
            <div key={this.props.index} className="col-xs-12 col-sm-3 col-md-3">
                <div className="gridTypeTwoContainer">
                    <img src="img/top-brand/amazon.jpg" alt=""/>
                    <span>Upto 12.5%</span>
                </div>
            </div>
		);
	}
}

GridTypeTwo.propTypes = {

};

export default GridTypeTwo;
