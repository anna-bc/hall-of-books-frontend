import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

function SearchBar() {

  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<any>(null);


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (input.trim() !== '') { 
    const searchinput = input.replace(' ', '+');
    console.log(searchinput);
    //it is 'title' just for the testing purposes
    fetch(`https://localhost:8000/books/title=${searchinput}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData);
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
    </>
  );
}

export default SearchBar;