/*
 *
 * AllDeals
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAllDeals from './selectors';

import Header from 'components/common/Header';
import ProductStores from 'components/common/ProductStores';
import Footer from 'components/common/Footer';

export class AllDeals extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Header {...this.props} />
        <ProductStores productType="deals" heading="Deals Stores" subheading="Cashback from over 500+ best online stores" />
        <Footer {...this.props} />
      </main>
    );
  }
}

AllDeals.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  AllDeals: makeSelectAllDeals(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDeals);
