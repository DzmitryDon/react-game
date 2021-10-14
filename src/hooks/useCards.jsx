import { useState } from "react";
import getNewData from "../pictures/pictures";

export const useCards = () => {
  const [cards, setCards] = useState(getNewData());

  const handleNewCards = () => {
    setCards(getNewData());
  };

  return [cards, handleNewCards];
};
