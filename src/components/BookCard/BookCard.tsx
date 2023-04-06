import React, { useState } from 'react';
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Book } from '../../models/Book';
import StarRating from '../StarRating/StarRating';
import { Link } from "react-router-dom";
import './BookCard.scss';

type BookCardProps = {
  book: Book
}


function BookCard({ book }: BookCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  console.log(isFavorite);

  return (
    <div className='BookCard'>
      <Link to={`/book/${book.id}`}>
        <div className="BookCard__image">
          <img src={book.thumbnailUrl} alt={book.title} />
        </div>
      </Link>
      <div className="BookCard__info">
        <Link to={`/book/${book.id}`}>
          <h3 className="BookCard__info__title">{book.title}</h3>
        </Link>
        <p className="BookCard__info__author">By {book.authors.join(", ")}</p>
        <StarRating averageRating={book.averageRating}/>
        <p className="BookCard__info__availability">{book.numAvailable} item(-s) available</p>
        <div className="BookCard__links">
          <a href="#" className="BookCard__links__borrow">Borrow</a>
          {isFavorite ? <BsSuitHeartFill onClick={toggleFavorite} /> : <BsSuitHeart onClick={toggleFavorite} />}
        </div>
      </div>
      </div>
  )
}

export default BookCard