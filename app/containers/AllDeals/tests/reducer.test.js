
import { fromJS } from 'immutable';
import allDealsReducer from '../reducer';

describe('allDealsReducer', () => {
  it('returns the initial state', () => {
    expect(allDealsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
