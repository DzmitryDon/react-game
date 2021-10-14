import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Points = () => {
  const { currentPoints, bestResult } = useSelector((state) => state.points);
  const { cardsA, cardsPaired } = useSelector((state) => state.cards);
  const history = useHistory();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (cardsA && cardsA.length > 0) {
      setShow(true);
    } else {
      return;
    }
  }, [cardsA]);

  useEffect(() => {
    if (cardsPaired === 8) {
      history.push("/game-over");
    }
  }, [cardsPaired, history]);

  return (
    <>
      {show && (
        <>
          <h3 className="puzzle_best">Лучший результат: {bestResult}</h3>
          <h2 className="puzzle_points">Текущий результат:{currentPoints}</h2>
        </>
      )}
    </>
  );
};
