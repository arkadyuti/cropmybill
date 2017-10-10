import { createSelector } from 'reselect';

/**
 * Direct selector to the allCoupons state domain
 */
const selectAllCouponsDomain = () => (state) => state.get('allCoupons');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AllCoupons
 */

const makeSelectAllCoupons = () => createSelector(
  selectAllCouponsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAllCoupons;
export {
  selectAllCouponsDomain,
};
