import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCardsData, closeCards, SetCards } from "../actions/cards";
import { clearPointsData, updateBestResult } from "../actions/points";
import { Button } from "../components/Button";
import { getPercents, getTotal } from "../calculating/calculating";
import { useCards } from "../hooks/useCards";

export default function GameOver() {
  const [cards] = useCards();
  const dispatch = useDispatch();
  const { currentPoints, bestResult, userName, attempts } = useSelector(
    (state) => state.points
  );

  const percent = getPercents(attempts);
  const total = getTotal(currentPoints, percent);

  const handleStartAgain = () => {
    comparingPoints();
    clearData();
  };

  const handleExit = () => {
    comparingPoints();
    dispatch(updateBestResult(total));
  };

  const comparingPoints = () => {
    if (bestResult < total) {
      dispatch(updateBestResult(total));
    }
  };

  const clearData = () => {
    dispatch(clearCardsData());
    dispatch(clearPointsData());
    dispatch(SetCards(cards));
    setTimeout(() => {
      dispatch(closeCards());
    }, 2500);
  };

  return (
    <section className="layout_page gameover_page animated fadeIn faster">
      <h1 className="title">Отлично!</h1>
      <h2 className="username">{userName}</h2>
      <h4>
        лучший:<strong> {bestResult}</strong>
      </h4>
      <h4>
        текущий: <strong>{currentPoints}</strong>
      </h4>
      <h4>
        бонусы: <strong>+{getPercents(attempts)}%</strong>
      </h4>
      <h4>
        (попыток: <strong>{attempts}</strong>)
      </h4>
      <h2>
        общий: <strong>{total}</strong>
      </h2>

      <div className="gameover_buttons">
        <Link to="/">
          <Button
            className="exit_game"
            msg="Выйти из игра"
            color="white"
            click={handleExit}
          />
        </Link>
        <Link to="/game">
          <Button
            className="repeat_game"
            msg="Играть еще раз"
            color="black"
            click={handleStartAgain}
          />
        </Link>
      </div>
    </section>
  );
}
