import { List, Map } from "./node_modules/immutable/dist/immutable-nonambient";

export const concatElements = (page1, page2) => List.concat(page1, page2);
export const mergeElements = (page1, page2) => {
  page1.equals(page2)
    ? List(page2.values())
    : Map({...page1, ...page2}).values()
}
