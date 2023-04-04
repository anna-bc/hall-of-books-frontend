import React from 'react';
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { Book } from '../../Models/Book';
import StarRating from '../StarRating/StarRating';
import './BookCard.scss';

type BookCardProps = {
  book: Book
}


function BookCard({ book }: BookCardProps) {
  const authors = book.authors.map((author) => console.log(author))
  console.log(book.authors)
  
  return (
    <div className='BookCard'>
      <div className="BookCard__image">
        <img src={book.thumbnailUrl} alt={book.title} />
      </div>
      <div className="BookCard__info">
        <h3 className="BookCard__info__title">{book.title}</h3>
        <p className="BookCard__info__author">By {book.authors.join(", ")}</p>
        <StarRating averageRating={book.averageRating}/>
        <p className="BookCard__info__availability">{book.numAvailable} item(-s) available</p>
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