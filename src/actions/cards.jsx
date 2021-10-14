import { cards } from "../types/types";

export const SetCards = (cardsArray) => {
  return {
    type: cards.setAllCards,
    payload: cardsArray,
  };
};

export const openCards = () => ({ type: cards.openAllCards });
export const closeCards = () => ({ type: cards.closeAllCards });

export const setComparing = (bool) => ({
  type: cards.setComparing,
  payload: bool,
});

export const setOption = (option, int) => {
  if (int === 1) {
    return setFirstOption(option);
  } else {
    return setSecondOption(option);
  }
};

const setFirstOption = (card) => ({
  type: cards.setFirstOption,
  payload: card,
});

const setSecondOption = (card) => ({
  type: cards.setSecondOption,
  payload: card,
});

export const setOpenCard = (id) => ({
  type: cards.setOpenCard,
  payload: id,
});

export const setCloseCard = (id) => ({
  type: cards.setCloseCard,
  payload: id,
});

export const clearOptions = () => ({ type: cards.clearOptions });

export const addCardsPaired = () => ({ type: cards.addCardsPaired });
export const clearCardsData = () => ({ type: cards.clearCardsData });
