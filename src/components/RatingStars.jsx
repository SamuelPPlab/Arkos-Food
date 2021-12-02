import React from "react";
import GrayStar from '../images/GrayStar.png';
import YellowStar from '../images/YellowStar.png';
import "../CSS/cards.css";

const RatingStars = ({ rating: { count, rate } }) => {
  const maxRating = 5;
  const yellowStarCount = Math.ceil(rate);
  const grayStarCount = maxRating - yellowStarCount;

  const yellowStarArray = [...Array(yellowStarCount)];
  const grayStarArray = [...Array(grayStarCount)];

  return(
    <div id="starContainer">
      <div id="stars">
        {yellowStarArray.map(() => <img className="stars" src={YellowStar} alt="Yellow star" key={Math.random()} />)}
        {grayStarArray.map(() => <img className="stars" src={GrayStar} alt="Gray Star" key={Math.random()} />)}
      </div>
      <div id="countText">({count})</div>
    </div>
  );
};

export default RatingStars;
