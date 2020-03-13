import React from "react";
import "./Score.css";

const roundScore = score => {
  return Math.round(score);
};

const Score = ({ score }) => {
  if (!score) return null;
  return <div className="score">{roundScore(score)}</div>;
};

export default Score;
