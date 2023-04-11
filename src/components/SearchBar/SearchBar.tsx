import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";

function SearchBar() {

  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false);
  if (input.trim() !== "") {
    const searchInput = input.replace(/ /g, '+');
    navigate("/search/" + searchInput);
    setInput("");
  } else {
    setInput("");
    setError(true);
  }
};


  return (
    <>
      {error && <p className="SearchBar__error">Please enter a search term</p>}
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