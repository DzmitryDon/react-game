import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../actions/ui";
import { Button } from "./Button";

export default function Exit({ open = false }) {
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(closeModal());
  };
  const handleExit = () => {
    dispatch(closeModal());
  };
  return (
    open && (
      <div className="exit_container">
        <div className="exit_page animated fadeIn faster">
          <h1 className="title">¿Хотите покинуть игру?</h1>

          <div className="exit_buttons">
            <Link to="/">
              <Button msg="Да, ухожу" color="white" click={handleExit} />
            </Link>
            <Button
              msg="Нет, продолжаю играть"
              color="black"
              click={handleContinue}
            />
          </div>
        </div>
      </div>
    )
  );
}
