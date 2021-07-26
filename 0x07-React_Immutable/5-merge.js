// import { List, Map } from "immutable";
const { List, Map } = require("immutable");

export const concatElements = (page1, page2) => List.concat([...page1, ...page2]);
export const mergeElements = (page1, page2) => List(Map({...page1, ...page2}));
