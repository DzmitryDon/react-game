import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearCardsData, closeCards, SetCards } from "../actions/cards";
import { addUserName, clearPointsData } from "../actions/points";
import { Button } from "../components/Button";
import { useCards } from "../hooks/useCards";
import { useForm } from "../hooks/useForm";

export default function Home() {
  const { userName } = useSelector((state) => state.points);
  const [cards] = useCards();
  const history = useHistory();
  const dispatch = useDispatch();

  const [{ name }, handleInputChange] = useForm({
    name: userName,
  });

  useEffect(() => {
    dispatch(clearCardsData());
    dispatch(clearPointsData());
  }, []);

  const handleSubmit = () => {
    dispatch(addUserName(name));
    dispatch(SetCards(cards));
    history.push("/game");
    setTimeout(() => {
      dispatch(closeCards());
    }, 3500);
  };

  return (
    <div className="layout_page animated fadeIn faster">
      <div className="home_component">
        <h1 className="title">Игра Memory</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name_field">Введи имя:</label>
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={name}
            placeholder="Напиши текст..."
            onChange={handleInputChange}
          />
          <div>
            <Button color="black" msg="Начать..." />
          </div>
        </form>
      </div>
    </div>
  );
}
