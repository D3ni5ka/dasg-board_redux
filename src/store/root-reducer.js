import { combineReducers } from "redux";
import { positionReducer } from "./positions/position-reducer";
import { filterReduce } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReduce,
});
