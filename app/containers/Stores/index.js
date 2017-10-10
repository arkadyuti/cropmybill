/*
 *
 * Stores
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectStores from './selectors';

import Header from 'components/common/Header';
import ProductStores from 'components/common/ProductStores';
import Footer from 'components/common/Footer';

export class Stores extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Header {...this.props} />
        <ProductStores productType="stores" heading="All Stores" subheading="Cashback for purchase from over 100 of the best online stores" />
        <Footer {...this.props} />
      </main>
    );
  }
}

Stores.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Stores: makeSelectStores(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
