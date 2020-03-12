import React from "react";
import "./Favorite.css";

const Favorite = ({ isFavorite, onClick }) => {
  return (
    <div className="favorite" onClick={onClick}>
      {isFavorite ? <span className="is-favorite">★</span> : <span>☆</span>}
    </div>
  );
};

export default Favorite;
