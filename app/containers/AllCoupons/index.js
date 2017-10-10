/*
 *
 * AllCoupons
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAllCoupons from './selectors';

import Header from 'components/common/Header';
import ProductStores from 'components/common/ProductStores';
import Footer from 'components/common/Footer';

export class AllCoupons extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Header {...this.props} />
        <ProductStores productType="coupons" heading="Coupon Stores" subheading="Cashback for purchase from over 100 of the best online stores" />
        <Footer {...this.props} />
      </main>
    );
  }
}

AllCoupons.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AllCoupons: makeSelectAllCoupons(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCoupons);
