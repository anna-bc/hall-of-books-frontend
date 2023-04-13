import React, { Dispatch, useContext, useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import defaultImage from '../../assets/noImage.png';
import useBorrowed from '../../hooks/useBorrowed';
import useFavorites from '../../hooks/useFavorites';
import { Book } from '../../models/Book';
import { ActionType, Actions } from '../../state/actions/Actions';
import { StateContext } from '../../state/context/StateContext';
import StarRating from '../StarRating/StarRating';
import './BookCard.scss';

type BookCardProps = {
  book: Book
}


function BookCard({ book }: BookCardProps) {

  const {state, dispatch} = useContext(StateContext);
  const [borrowedList, borrowedBook, setBookId] = useBorrowed({ token: state.token, borrowedList: state.borrowedList, dispatch: dispatch });
  const [favoritesList, setFavoritesBookId] = useFavorites ({ token: state.token, favoritesList: state.favoritesList, dispatch: dispatch });
  const [updatedBook, setUpdatedBook] = useState<Book>(book);
  
  useEffect(() => {
    if(borrowedBook === undefined) {
      return;
    }
    setUpdatedBook(borrowedBook);
    dispatch({
      type: Actions.setFavoritesList,
      payload: { favoritesList: favoritesList },
    });
    setBookId('');
  }, [borrowedBook, favoritesList]);


  return (
    <div className="BookCard">
      <Link to={`/book/${updatedBook.id}`}>
        <div className="BookCard__image">
          {book.thumbnailUrl ? (
            <img src={updatedBook.thumbnailUrl} alt={updatedBook.title} />
          ) : (
            <img src={defaultImage} alt="Default Image" />
          )}
        </div>
      </Link>
      <div className="BookCard__info">
        <Link to={`/book/${updatedBook.id}`}>
          <h3 className="BookCard__info__title">{updatedBook.title}</h3>
        </Link>
        <p className="BookCard__info__author">
          By {updatedBook.authors.join(", ")}
        </p>
        <StarRating averageRating={updatedBook.averageRating} />
        <p className="BookCard__info__availability">
          {updatedBook.numAvailable} item(-s) available
        </p>
        <div className="BookCard__links">
          {!state.borrowedList.includes(updatedBook.id) ? (
            <a
              className="BookCard__links__borrow"
              onClick={() => setBookId(updatedBook.id)}
            >
              Borrow
            </a>
          ) : (
            <a
              className="BookCard__links__borrow"
              onClick={() => setBookId(updatedBook.id)}
            >
              Return
            </a>
          )}

          {!state.favoritesList.includes(book.id) ? 
          (
            <BsSuitHeart
            onClick={() => setFavoritesBookId(book.id)}
          />
          ) :
          (
            <BsSuitHeartFill
            onClick={() => setFavoritesBookId(book.id)}
          />
          )
          }
        </div>
      </div>
    </div>
  );
}

export default BookCard