import React from 'react';
import './StarRating.scss';

type StarRatingProps = {
  averageRating: number
}


function StarRating({ averageRating }: StarRatingProps) {

  console.log(averageRating);

  const filledStars = Math.floor(averageRating);
  console.log(filledStars);
  const halfStars = Math.ceil(averageRating - filledStars);
  console.log(halfStars);
  const emptyStars = 5 - filledStars - halfStars;
  console.log(emptyStars);

  function renderStars (count: number, filled: boolean) {
    const starClass = filled ? 'star filled' : 'star empty';

    return [...Array(count)].map((star, i) => (
      <span key={i} className={starClass}>&#9733;</span>
    ));
  };

  return (
    <div className="StarRating">
      {renderStars(filledStars, true)}
      {renderStars(halfStars, true)}
      {renderStars(emptyStars, false)}
    </div>
  )
}

export default StarRating;


// import React from 'react';
// import './StarRating.scss';


// function StarRating({}) {
//   return (
//     <div className="StarRating">
//       {[...Array(5)].map((star) => {        
//         return (         
//           <span className="star">&#9733;</span>        
//         );
//       })}
//     </div>
//   )
// }

// export default StarRating