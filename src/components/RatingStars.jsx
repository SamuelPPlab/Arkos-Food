import React from "react";
import GrayStar from '../images/GrayStar.png';
import YellowStar from '../images/YellowStar.png';

const RatingStars = ({ rating: { count, rate } }) => {
  const yellowStarIMG = <img src={YellowStar} alt="Yellow star" />;
  const grayStar = <img src={GrayStar} alt="Gray Star" />;
  const maxRating = 5;
  const yellowStarCount = Math.ceil(rate);
  const grayStarCount = maxRating - yellowStarCount;
  return(
    <div>

    </div>
  );
};

export default RatingStars;
