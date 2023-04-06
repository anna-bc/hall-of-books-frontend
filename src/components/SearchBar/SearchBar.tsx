import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

function SearchBar() {

  const [input, setInput] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();


const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  navigate("/search/" + input);
  if (input.trim() !== '') { 
    //it is 'title' just for the testing purposes
    const searchinput = input.replace(' ', '+');
    fetch(`https://localhost:8000/books/title=${searchinput}`)
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
    </>
  );
}

export default SearchBar;