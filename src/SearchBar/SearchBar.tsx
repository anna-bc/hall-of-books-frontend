import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

function SearchBar() {

  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<any>(null);


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (input.trim() !== '') { 
    //it is 'title' just for the testing purposes
    fetch(`http://localhost:8000/books/title=${input}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setInput("");
      });
  }
};

  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit} className="SearchBar">
        <div className="SearchBar__wrapper">
          <FaSearch />
          <input
            type="text"
            value={input}
            placeholder='search for books by title...'
            onChange={(event) => setInput(event.target.value)}
            className="SearchBar__input"
          />
        </div>
      </form>
      {/* The code below will be replaced  */}
      {data !== null && (
        data.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div>
          {data.result.map((book : any) => (
            <div key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
      )
      )}
    </>
  );
}

export default SearchBar;