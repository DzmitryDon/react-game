import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCard, setOption, setComparing } from "../actions/cards";

export const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { cardsOpen, comparing, firstOption, secondOption } = useSelector(
    (state) => state.cards
  );

  const handleClick = () => {
    dispatch(setOpenCard(item.id));
    if (firstOption && secondOption) {
      return;
    }

    if (!firstOption) {
      dispatch(setOption(item, 1));
    } else {
      dispatch(setOption(item, 2));
      dispatch(setComparing(true));
    }
  };

  return (
    <button
      disabled={item.open || comparing || cardsOpen}
      className="puzzle_card"
      id={item.open || cardsOpen ? item.name : ""}
      onClick={handleClick}
    >
      {item.open || cardsOpen ? (
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={item.symbol}
          />

          <text>
            <textPath path="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50">
              Дмитрий
            </textPath>
          </text>
        </svg>
      ) : (
        ""
      )}
    </button>
  );
};
