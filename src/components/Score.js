import React from "react";
import "./Score.css";

const roundScore = score => {
  return Math.round(score);
};

const Score = ({ score }) => {
  return <div className="score">{roundScore(score)}</div>;
};

export default Score;
