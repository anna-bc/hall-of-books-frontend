import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookCard from "../../components/BookCard/BookCard";
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
      const books = await data.json();
      setSearchedBooks(books.data);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (searchedBooks.length === 0) {
    return <Err404Page error={"notFound"} />
  }


  return (
    <div className="SearchedBooks">
      {searchedBooks.map(book => (
        <BookCard key={book.id} book={book}/>
      ))}
    </div>
  )
}

export default SearchedBooks