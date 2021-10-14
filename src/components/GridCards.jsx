import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addCardsPaired,
  clearOptions,
  setCloseCard,
  setComparing,
} from "../actions/cards";
import { addAttempt, addPoints } from "../actions/points";
import { Card } from "./Card";
import { Loading } from "./Loading";

export const GridCards = () => {
  const { cardsA, firstOption, secondOption } = useSelector(
    (state) => state.cards
  );

  const dispatch = useDispatch();
  const { attempts, currentPoints } = useSelector((state) => state.points);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cardsA && cardsA.length > 0) {
      setLoading(false);
    } else {
      return;
    }
  }, [cardsA]);

  useEffect(() => {
    if (!firstOption || !secondOption) {
      return;
    }

    if (firstOption.symbol === secondOption.symbol) {
      dispatch(clearOptions());
      dispatch(setComparing(false));
      dispatch(addAttempt(attempts));
      dispatch(addPoints(currentPoints));
      dispatch(addCardsPaired());
    } else {
      setTimeout(() => {
        dispatch(setCloseCard(firstOption.id));
        dispatch(setCloseCard(secondOption.id));
        dispatch(setComparing(false));
        dispatch(addAttempt(attempts));
        dispatch(clearOptions());
      }, 400);
    }
  }, [secondOption]);

  /* attempts, currentPoints, dispatch, firstOption */

  return (
    <div className="puzzle_grid">
      {!loading ? (
        cardsA.map((e) => {
          return <Card key={e.id} item={e} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};
