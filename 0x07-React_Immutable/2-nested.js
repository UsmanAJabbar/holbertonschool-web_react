import { fromJS } from "./node_modules/immutable/dist/immutable-nonambient";

export default function accessImmutableObject(object, arrPathToKeyWithValue) {
  return fromJS(object).getIn(arrPathToKeyWithValue, undefined);
}
