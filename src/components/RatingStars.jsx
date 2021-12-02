import React from "react";
import GrayStar from '../images/GrayStar.png';
import YellowStar from '../images/YellowStar.png';

const RatingStars = ({ rating: { count, rate } }) => {
  const yellowStarIMG = <img src={YellowStar} alt="Yellow star" />;
  const grayStarIMG = <img src={GrayStar} alt="Gray Star" />;

  const maxRating = 5;
  const yellowStarCount = Math.ceil(rate);
  const grayStarCount = maxRating - yellowStarCount;

  const yellowStarArray = [...Array(yellowStarCount)];
  const grayStarArray = [...Array(grayStarCount)];

  return(
    <div>
      {yellowStarArray.map(() => yellowStarIMG)}
      {grayStarArray.map(() => grayStarIMG)}
    </div>
  );
};

export default RatingStars;
