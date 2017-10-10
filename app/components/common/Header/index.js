/**
*
* Header
*
*/

import React from 'react';
import ButtonAnchor from 'components/common/ButtonAnchor'
import { HEADER_CATAGORIES } from 'components/common/constants'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
		this.state = {
			hamburger: false
		};
		
	}
	handleHamburgerMenu = () => {
		this.setState({hamburger: true})
	}
	handleCloseOverlay = () => {
		this.setState({hamburger: false})
	}
	render() {
		return (
			<header className="container-fluid">
				<div className="row headerWrapper main-container background_primary">
					<div className="col-xs-4 col-sm-4 col-md-4">
						<a href="/"><img className="header-logo" src="img/header-logo.png" alt="CropmyBill Logo" /></a>
					</div>
					<div className="col-xs-8 col-sm-8 col-md-8">
						<span className="hamburger-icon" onClick={this.handleHamburgerMenu}>mobile menu</span>
						<ButtonAnchor anchorClass="ButtonAnchorLogin floatRight" buttonText="JOIN US" />
						<div className={`header-mobile-wrapper ${this.state.hamburger ? "mobile-disp-block" : "mobile-disp-none"}`}>
							<ButtonAnchor anchorClass="ButtonAnchorRefer floatRight" buttonText="REFER &amp; EARN" />
							<a className="links uppercase mobile-disp-none" href="/coupons">COUPONS</a>
							<a className="links uppercase mobile-disp-none" href="/deals">Deals</a>
							<button className="dropbtn desktop-disp-none close-hamburger" onClick={this.handleCloseOverlay}>close hamburger</button>
							<div className="links dropdown">
								<button className="dropbtn uppercase">Catagories</button>
								<ul className="dropdown-content">
									{HEADER_CATAGORIES.map((value, index) => <li key={index}><a href="{value}">{value}</a></li>)}
								</ul>
							</div>
						</div>
						<a className="links uppercase" href="/stores">All Store</a>
					</div>
					{/* <div className="col-xs-6 col-sm-4 col-md-4">
					<img src="img/header-logo.png" alt="CropmyBill Logo"/>
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
				</div> */}
				</div>
			</header>
		);
	}
}

Header.propTypes = {

};

export default Header;
