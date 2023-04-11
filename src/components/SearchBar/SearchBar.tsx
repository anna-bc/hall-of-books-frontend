import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Err404Page from '../../pages/Err404/Err404page';
import "./SearchBar.scss";

function SearchBar() {

  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() !== "") {
      const searchInput = input.replace(/ /g, '+');
      navigate("/search/" + searchInput);
      setInput("");
    } else {
      setInput("");
      setError(true);
    }
  };

    useEffect(() => {
    return () => {
      setError(false);
    };
  }, [navigate]);

  return (
    <>
      <form onSubmit={handleSubmit} className="SearchBar">
        <div className="SearchBar__wrapper">
          <FaSearch />
          <input
            type="text"
            value={input}
            placeholder='search for books by title...'
            onChange={(event) => {
              setInput(event.target.value);
              setError(false);
            }}
            className="SearchBar__input"
          />
          {error && <Err404Page error={"invalidInput"} className="SearchBar__error"/>}
        </div>
      </form>
    </>
  );
}

export default SearchBar;