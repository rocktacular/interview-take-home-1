import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

function Header({ title, buttonText, onButtonPress }) {
  return (
    <header className="header">
      <div className="header__item--side"></div>
      <div className="header__item--center">{title}</div>
      <div className="header__item--side">
        {buttonText && onButtonPress ? <button>{buttonText}</button> : null}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onButtonPress: PropTypes.func
};

export default Header;
