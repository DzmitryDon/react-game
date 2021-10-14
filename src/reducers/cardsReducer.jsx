import { cards } from "../types/types";

const initialState = {
  cardsA: null,
  cardsPaired: 0,
  firstOption: null,
  secondOption: null,
  comparing: false,
  cardsOpen: true,
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case cards.setAllCards:
      return {
        ...state,
        cardsA: action.payload,
      };

    case cards.openAllCards:
      return {
        ...state,
        cardsOpen: true,
      };
    case cards.closeAllCards:
      return {
        ...state,
        cardsOpen: false,
        CardsA: state.cardsA.map((e) => {
          e.open = false;
          return e;
        }),
      };

    case cards.setCloseCard:
      return {
        ...state,
        cardsA: state.cardsA.map((e) => {
          if (e.id === action.payload) {
            e.open = false;
            return e;
          }
          return e;
        }),
      };
    case cards.setOpenCard:
      return {
        ...state,
        cardsA: state.cardsA.map((e) => {
          if (e.id === action.payload) {
            e.open = true;
            return e;
          }
          return e;
        }),
      };

    case cards.setComparing:
      return {
        ...state,
        comparing: action.payload,
      };

    case cards.setFirstOption:
      return {
        ...state,
        firstOption: action.payload,
      };

    case cards.setSecondOption:
      return {
        ...state,
        secondOption: action.payload,
      };
    case cards.clearOptions:
      return {
        ...state,
        firstOption: null,
        secondOption: null,
      };

    case cards.addCardsPaired:
      return {
        ...state,
        cardsPaired: state.cardsPaired + 1,
      };

    case cards.clearCardsData:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
