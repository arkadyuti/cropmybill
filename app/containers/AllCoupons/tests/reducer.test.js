
import { fromJS } from 'immutable';
import allCouponsReducer from '../reducer';

describe('allCouponsReducer', () => {
  it('returns the initial state', () => {
    expect(allCouponsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
