/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage from './selectors';
import Header from 'components/common/Header';
import CarouselImage from 'components/CarouselImage';
import CatagoryOne from 'components/CatagoryOne';
import CatagoryTwo from 'components/CatagoryTwo';
import Footer from 'components/common/Footer';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <Header {...this.props}/>
        <CarouselImage {...this.props}/>
        <CatagoryOne {...this.props} />
        <CatagoryTwo {...this.props} />
        <CatagoryOne {...this.props} />
        <Footer {...this.props} />
      </main>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
