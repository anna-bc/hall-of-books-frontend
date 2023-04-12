import React, { useEffect, useState }  from 'react';
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
  const token = 'hob_8a895bff9d49cb69f62ab003779cb0c47a31bb67471ab2a2e2e0c836372aaf6a';

  
    useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('https://localhost:8000/my/favorites', {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const isBookFavorite = data.favorites.some(favorite => favorite.id === book.id);
          setIsFavorite(isBookFavorite);
        } else {
          console.error('Error fetching favorites:', response.status);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };

    fetchFavorites();
  }, [book.id]); 

  const toggleFavorite = () => {
    const url = isFavorite
      ? `https://localhost:8000/my/favorites/remove/${book.id}` 
      : `https://localhost:8000/my/favorites/add/${book.id}`; 
    
    const token = 'hob_8a895bff9d49cb69f62ab003779cb0c47a31bb67471ab2a2e2e0c836372aaf6a';
      
    fetch(url, {
      method: isFavorite ? 'POST' : 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          setIsFavorite(!isFavorite);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <div className='BookCard'>
      <Link to={`/book/${book.id}`}>
        <div className="BookCard__image">
        {book.thumbnailUrl ? (
            <img src={book.thumbnailUrl} alt={book.title} />
          ) : (
          <img src={defaultImage} alt="Default Book Cover" /> 
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