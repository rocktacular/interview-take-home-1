import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { get } from "lodash";
import "./Header.css";

function Header() {
  const location = useLocation();

  // set title
  let title = "Movies";
  let showBackButton = false;
  const titleFromState = get(location, "state.title");
  if (titleFromState) {
    title = titleFromState;
    showBackButton = true;
  }

  // back button
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <header className="header">
      <div className="header__item--side"></div>
      <div className="header__item--center">{title}</div>
      <div className="header__item--side">
        {showBackButton ? (
          <div className="header__button" onClick={goBack}>
            Close
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
