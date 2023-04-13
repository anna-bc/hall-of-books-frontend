import React, { Dispatch, useContext, useEffect } from 'react';
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import defaultImage from '../../assets/noImage.png';
import useBorrowed from '../../hooks/useBorrowed';
import { Book } from '../../models/Book';
import { Actions, ActionType } from '../../state/actions/Actions';
import { StateContext } from '../../state/context/StateContext';
import StarRating from '../StarRating/StarRating';
import './BookCard.scss';

type BookCardProps = {
  book: Book
}


function BookCard({ book }: BookCardProps) {

  const {state, dispatch} = useContext(StateContext);
  const [borrowedList, setBookId] = useAddBorrowed({ token: state.token, borrowedList: state.borrowedList, dispatch: dispatch });
  
  useEffect(() => {
    dispatch({
      type: Actions.setBorrowedList,
      payload: { borrowedList: borrowedList },
    });
  }, [borrowedList]);

  console.log(state.borrowedList);

  return (
    <div className="BookCard">
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
        <StarRating averageRating={book.averageRating} />
        <p className="BookCard__info__availability">
          {book.numAvailable} item(-s) available
        </p>
        <div className="BookCard__links">
          {!state.borrowedList.includes(book.id) ? 
          (
            <a
            href="#"
            className="BookCard__links__borrow"
            onClick={() => setBookId(book.id)}
          >
            Borrow
          </a>) :
          (
            <a
            href="#"
            className="BookCard__links__borrow"
            onClick={() => setBookId(book.id)}
          >
            Return
          </a>
          )
          }
          {/* <BsSuitHeartFill /> */}
          <BsSuitHeart />
        </div>
      </div>
    </div>
  );
}

export default BookCard