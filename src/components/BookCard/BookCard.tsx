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

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

function BookCard({ book }: BookCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    fetch(`https://localhost:8000/my/favorites/${book.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res)
        if (res.ok) {
          setIsFavorite(!isFavorite);
        }
      })
      .catch(error => {
        console.error(error);
      });

  }

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
          <h3 className="BookCard__info__title">{truncateString(book.title, 50)}</h3>
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