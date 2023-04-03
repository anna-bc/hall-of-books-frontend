import React from 'react';
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Book } from '../../Models/Book';
import StarRating from '../StarRating/StarRating';
import './BookCard.scss';

type BookCardProps = {
  book: Book
}



function BookCard({ book }: BookCardProps) {
  

  return (
    <div className='BookCard'>
      <div className="BookCard__image">
        <img src={book.thumbnailUrl} alt={book.title} />
      </div>
      <div className="BookCard__info">
        <h3 className="BookCard__info__title">{book.title}</h3>
        <p className="BookCard__info__author">{book.authors.map((author, i) => (
          <li key={i}>{author}</li>))
        }</p>
        <StarRating averageRating={book.average_rating}/>
        <p className="BookCard__info__availability">{book.num_available} available now</p>
        <div className="BookCard__links">
          <a className="BookCard__links__borrow">Borrow</a>
          {/* <BsSuitHeartFill /> */}
          <BsSuitHeart />
        </div>
      </div>
    </div>
  )
}

export default BookCard