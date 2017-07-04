/**
*
* Header
*
*/

import React from 'react';
import ButtonAnchor from 'components/common/ButtonAnchor'
import { HEADER_CATAGORIES } from 'components/common/constants'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
	return (
		<div className="container-fluid">
			<div className="row headerWrapper background_primary">
				<div className="col-xs-6 col-sm-4 col-md-4">
					<img src="img/253.png" alt=""/>
				</div>
				<div className="col-xs-6 col-sm-8 col-md-8">
					<ButtonAnchor anchorClass="ButtonAnchorLogin margin24 m-otm floatRight" buttonText="JOIN US" />
					<ButtonAnchor anchorClass="ButtonAnchorRefer margin24 m-otm floatRight" buttonText="REFER &amp; EARN" />
					<a className="links uppercase" href="/coupons">COUPONS</a>
					<a className="links uppercase" href="/coupons">Deals</a>
					<a className="links uppercase" href="/coupons">Catagories</a>
					<div className="links dropdown">
						<button className="dropbtn uppercase">Dropdown</button>
						<ul className="dropdown-content">
							{HEADER_CATAGORIES.map((value, index)=> <li key={index}><a href="{value}">{value}</a></li>)}
						</ul>
					</div>
					<a className="links uppercase" href="/coupons">All Store</a>
				</div>
			</div>
		</div>
		);
	}
}

Header.propTypes = {

};

export default Header;
