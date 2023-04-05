import React, { useEffect, useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Author } from "../../models/Author";
import { Book } from '../../models/Book';
import { Category } from "../../models/Category";
import StarRating from '../StarRating/StarRating';
import './BookDetails.scss';


type BookCardProps = {
  book?: Book
}

function BookDetails({ book }: BookCardProps) {
  let params = useParams();
  const [bookDetails, setBookDetails] = useState<Book | null>(null);

  
  useEffect(() => {
    fetch(`https://localhost:8000/books/id=${params.id}`)
      .then(response => response.json())
      .then(data => {
        const book = data.data;
        const authors = book.authors.map((author: Author) => `${author.lastName}`);
        const categories = book.categories.map((category: Category) => `${category.categoryName}`);
        const bookDetails = { ...book, authors, categories };
        setBookDetails(bookDetails);
        console.log(bookDetails);
      })
      .catch(error => console.error(error));
  },  [params.id]);

  if (bookDetails === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className='BookDetails'>
    <div className="BookDetails__visual">
        <div className="BookDetails__visual__image">
          <img src={bookDetails.thumbnailUrl} alt={bookDetails.title} />
        </div>
        <h5 className="BookDetails__visual__availability">Availability: {bookDetails.numAvailable} item(-s) available</h5>
        <div className="BookDetails__visual__links">
          <a href="#" className="BookDetails__visual__links-borrow">Borrow</a>
          {/* <BsSuitHeartFill /> */}
          <BsSuitHeart />
        </div>
      </div>
      <div className="BookDetails__info">
        <h3 className="BookDetails__info__title">{bookDetails.title}</h3>
        <p className="BookDetails__info__author">By {bookDetails.authors.join(", ")}</p>
        <StarRating averageRating={bookDetails.averageRating} />
        <p className="BookDetails__info__reviews">{bookDetails.ratingsCount } Reviews</p>
        <h4 className="BookDetails__info__category">{bookDetails.categories.join(", ")}</h4>
        <p className="BookDetails__info__description">{bookDetails.description}</p>
        <div className="BookDetails__extra">
          <p className="BookDetails__extra__pages">Pages: {bookDetails.pageCount}</p>
          <p className="BookDetails__extra__publisher">{bookDetails.publisher}</p>
          <p className="BookDetails__extra__publishedDate">{bookDetails.publishedDate}</p>
        </div>
      </div> 
    </div>
  )
}

export default BookDetails