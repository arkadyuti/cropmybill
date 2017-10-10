import { createSelector } from 'reselect';

/**
 * Direct selector to the allDeals state domain
 */
const selectAllDealsDomain = () => (state) => state.get('allDeals');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AllDeals
 */

const makeSelectAllDeals = () => createSelector(
  selectAllDealsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAllDeals;
export {
  selectAllDealsDomain,
};
