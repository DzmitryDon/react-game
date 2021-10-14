import { combineReducers } from "redux";
import { cardsReducer } from "./cardsReducer";
import { pointsReducer } from "./pointsReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  points: pointsReducer,
  ui: uiReducer,
});
