import React from "react";
import GrayStar from '../images/GrayStar.png';
import YellowStar from '../images/YellowStar.png';

const RatingStars = ({ rating: { count, rate } }) => {
  const maxRating = 5;
  const yellowStarCount = Math.ceil(rate);
  const grayStarCount = maxRating - yellowStarCount;

  const yellowStarArray = [...Array(yellowStarCount)];
  const grayStarArray = [...Array(grayStarCount)];

  return(
    <div>
      <div>
        {yellowStarArray.map(() => <img src={YellowStar} alt="Yellow star" key={Math.random()} />)}
        {grayStarArray.map(() => <img src={GrayStar} alt="Gray Star" key={Math.random()} />)}
      </div>
      <div>
        ({count})
      </div>
    </div>
  );
};

export default RatingStars;
