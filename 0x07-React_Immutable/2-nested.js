import { fromJS } from 'immutable';

export default function accessImmutableObject(object, arrPathToKeyWithValue) {
  return fromJS(object).getIn(arrPathToKeyWithValue, undefined);
}
