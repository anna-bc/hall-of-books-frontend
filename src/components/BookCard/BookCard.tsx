import React from 'react';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import defaultImage from '../../assets/noImage.png';
import { Book } from '../../models/Book';
import StarRating from '../StarRating/StarRating';
import './BookCard.scss';

type BookCardProps = {
  book: Book
}


function BookCard({ book }: BookCardProps) {
  
  return (
    <div className='BookCard'>
      <Link to={`/book/${book.id}`}>
        <div className="BookCard__image">
        {book.thumbnailUrl ? (
            <img src={book.thumbnailUrl} alt={book.title} />
          ) : (
          <img src={defaultImage} alt="Default Image" /> 
          )}
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
          {/* <BsSuitHeartFill /> */}
          <BsSuitHeart />
        </div>
      </div>
      </div>
  )
}

export default BookCard