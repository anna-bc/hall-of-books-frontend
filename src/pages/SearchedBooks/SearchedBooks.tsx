import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import BookCard from "../../components/BookCard/BookCard";
import { Author } from "../../models/Author";
import { Book } from "../../models/Book";
import { Category } from "../../models/Category";
import Err404Page from "../Err404/Err404page";
import "./SearchedBooks.scss";

function SearchedBooks() {
  const [searchedBooks, setSearchedBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  let params = useParams();

  const getSearch = async (searchinput: string) => {
    setLoading(true); 
    try {
      const data = await fetch(`https://localhost:8000/books/title=${searchinput}`);
      const content = await data.json();
      const books = content.data.map((book : Book ) => {
        const authors = book.authors.map((author: Author ) => `${author.lastName}`);
        const categories = book.categories.map((category : Category ) => `${category.categoryName}`);
        return {...book, authors, categories};
      })
      setSearchedBooks(books);
      setLoading(false);
    }
    catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
    }
  }

    useEffect(() => {
    if (params.search) {
      getSearch(params.search);
    }
  }, [params.search]);


  return (
    <div className="SearchedBooks">
    {loading ? (
      <div className="SearchedBooks__loader">
          <FadeLoader color={"#808080"} loading={true}/>
      </div>
    ) : searchedBooks.length === 0 ? (
      <Err404Page error={"notFound"} className="SearchedBooks__error"/>
    ) : (
      searchedBooks.map(book => (
        <BookCard key={book.id} book={book}/>
      )) 
    )}
  </div>
  )
}

export default SearchedBooks