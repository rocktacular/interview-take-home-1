import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";

function Header({ title, showBack }) {
  // back button handler
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <header className="header">
      <div className="header__item--side"></div>
      <div className="header__item--center">{title}</div>
      <div className="header__item--side">
        {showBack ? (
          <div className="header__button" onClick={goBack}>
            Close
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
