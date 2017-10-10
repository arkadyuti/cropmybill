
import { fromJS } from 'immutable';
import storesReducer from '../reducer';

describe('storesReducer', () => {
  it('returns the initial state', () => {
    expect(storesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
