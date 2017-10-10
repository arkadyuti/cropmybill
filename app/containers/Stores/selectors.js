import { createSelector } from 'reselect';

/**
 * Direct selector to the stores state domain
 */
const selectStoresDomain = () => (state) => state.get('stores');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Stores
 */

const makeSelectStores = () => createSelector(
  selectStoresDomain(),
  (substate) => substate.toJS()
);

export default makeSelectStores;
export {
  selectStoresDomain,
};
