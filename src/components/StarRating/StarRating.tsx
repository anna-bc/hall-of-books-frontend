import React from "react";
import ReactStars from "react-rating-stars-component";
import './StarRating.scss';

type StarRatingProps = {
  averageRating: number
}

function StarRating({ averageRating }: StarRatingProps) {
  return (
    <div className="StarRating">
      <ReactStars 
      count={5}
      size={20}
      value={averageRating}
      isHalf = {true}
      edit={false}
    />
    </div>
  );
}
export default StarRating;
