import { ui } from "../types/types";

const initialState = {
  modal: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ui.openModal:
      return {
        ...state,
        modal: true,
      };
    case ui.closeModal:
      return {
        ...state,
        modal: false,
      };

    default:
      return state;
  }
};
