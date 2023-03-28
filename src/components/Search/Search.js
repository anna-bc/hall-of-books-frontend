import React, { useState } from "react";

function Search() {
    const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/books/title=${title}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };

  console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {data === null ? (
        <p>Enter a search query and click Submit to search.</p>
      ) : data.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {data.result.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search