import React, { useEffect, useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import defaultImage from '../../assets/noImage.png';
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
  const token = 'hob_8a895bff9d49cb69f62ab003779cb0c47a31bb67471ab2a2e2e0c836372aaf6a';
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:8000/books/id=${params.id}`);
        const data = await response.json();
        const book = data.data;
        const authors = book.authors.map((author: Author) => `${author.lastName}`);
        const categories = book.categories.map((category: Category) => `${category.categoryName}`);
        const bookDetails = { ...book, authors, categories };
        setBookDetails(bookDetails);
        console.log(bookDetails);
      } catch (error) {
        console.error(error);
      }
    }
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
          const isBookFavorite = data.favorites.some(favorite => favorite.id === params.id);
          setIsFavorite(isBookFavorite);
        } else {
          console.error('Error fetching favorites:', response.status);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };


    fetchData();
    fetchFavorites();
  }, [params.id]);

  
  const toggleFavorite  = () =>{
    const url = isFavorite
      ? `https://localhost:8000/my/favorites/remove/${params.id}`
      : `https://localhost:8000/my/favorites/add/${params.id}`;

    fetch(url, {
      method: isFavorite ? 'POST' : 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          setIsFavorite(!isFavorite);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  if (bookDetails === null) {
    return <div>Loading...</div>;
  }


  return (
    <div className='BookDetails'>
    <div className="BookDetails__visual">
        <div className="BookDetails__visual__image">
          {bookDetails.thumbnailUrl ? (
            <img src={bookDetails.thumbnailUrl} alt={bookDetails.title} />
            ) : (
          <img src={defaultImage} alt="Default Image" /> 
          )}
        </div>
        <h5 className="BookDetails__visual__availability">Availability: {bookDetails.numAvailable} item(-s) available</h5>
        <div className="BookDetails__visual__links">
          <a href="#" className="BookDetails__visual__links-borrow">Borrow</a>
          {isFavorite ? <BsSuitHeartFill onClick={toggleFavorite}  /> : <BsSuitHeart onClick={toggleFavorite}  />}
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