import React, { useEffect, useState, useContext } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

import { Author } from "../../models/Author";
import { Category } from "../../models/Category";
import { StateContext } from "../../state/context/StateContext";

import "./BookDetails.scss";

import defaultImage from "../../assets/noImage.png";
import useBorrowed from "../../hooks/useBorrowed";
import useFavorites from "../../hooks/useFavorites";
import { Book } from "../../models/Book";
import { ActionType, Actions } from "../../state/actions/Actions";

import StarRating from "../StarRating/StarRating";

type BookCardProps = {
  book: Book;
};

function BookDetails() {
  let params = useParams();
  const { state, dispatch } = useContext(StateContext);
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const [borrowedList, borrowedBook, setBookId] = useBorrowed({
    token: state.token,
    borrowedList: state.borrowedList,
    dispatch: dispatch,
  });
  const [favoritesList, setFavoritesBookId] = useFavorites({
    token: state.token,
    favoritesList: state.favoritesList,
    dispatch: dispatch,
  });

  useEffect(() => {
    fetch(`https://localhost:8000/books/id=${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        const book = data.data;
        const authors = book.authors.map(
          (author: Author) => `${author.lastName}`
        );
        const categories = book.categories.map(
          (category: Category) => `${category.categoryName}`
        );
        const bookDetails = { ...book, authors, categories };
        setBookDetails(bookDetails);
      })
      .catch((error) => console.error(error));
  }, [params.id]);

  useEffect(() => {
    if (borrowedBook === undefined) {
      return;
    }
    setBookDetails(borrowedBook);
    setBookId("");
  }, [borrowedBook]);

  useEffect(() => {
    dispatch({
      type: Actions.setFavoritesList,
      payload: { favoritesList: favoritesList },
    });
    setFavoritesBookId("");
  }, [favoritesList]);

  if (bookDetails === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="BookDetails">
      <div className="BookDetails__visual">
        <div className="BookDetails__visual__image">
          {bookDetails.thumbnailUrl ? (
            <img src={bookDetails.thumbnailUrl} alt={bookDetails.title} />
          ) : (
            <img src={defaultImage} alt="Default Image" />
          )}
        </div>
        <h5 className="BookDetails__visual__availability">
          Availability: {bookDetails.numAvailable} item(-s) available
        </h5>
        <div className="BookCard__links">
          {!state.borrowedList.includes(bookDetails.id) ? (
            <a
              href="#"
              className="BookCard__links__borrow"
              onClick={() => {
                if (state.isAuthenticated) {
                  setBookId(bookDetails.id);
                } else {
                  alert("You need to be logged in to be able to borrow books!");
                }
              }}
            >
              Borrow
            </a>
          ) : (
            <a
              href="#"
              className="BookCard__links__borrow"
              onClick={() => setBookId(bookDetails.id)}
            >
              Return
            </a>
          )}
          {!state.favoritesList.includes(bookDetails.id) ? (
            <BsSuitHeart
              onClick={() => {
                if (state.isAuthenticated) {
                  setFavoritesBookId(bookDetails.id);
                } else {
                  alert(
                    "You need to be logged in to be able to add books to your favorites!"
                  );
                }
              }}
            />
          ) : (
            <BsSuitHeartFill
              onClick={() => setFavoritesBookId(bookDetails.id)}
            />
          )}
        </div>
      </div>
      <div className="BookDetails__info">
        <h3 className="BookDetails__info__title">{bookDetails.title}</h3>
        <p className="BookDetails__info__author">
          By {bookDetails.authors.join(", ")}
        </p>
        <StarRating averageRating={bookDetails.averageRating} />
        <p className="BookDetails__info__reviews">
          {bookDetails.ratingsCount} Reviews
        </p>
        <h4 className="BookDetails__info__category">
          {bookDetails.categories.join(", ")}
        </h4>
        <p className="BookDetails__info__description">
          {bookDetails.description}
        </p>
        <div className="BookDetails__extra">
          <p className="BookDetails__extra__pages">
            Pages: {bookDetails.pageCount}
          </p>
          <p className="BookDetails__extra__publisher">
            {bookDetails.publisher}
          </p>
          <p className="BookDetails__extra__publishedDate">
            {bookDetails.publishedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
