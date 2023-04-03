import React, { useEffect, useState } from 'react';
import './Main.scss';

function Main() {
  const [books, setBooks] = useState<any>([]);

  useEffect(() => {
    fetch('http://localhost:8000/books/')
      .then(response => response.json())
      .then(data => {
        const res = data.result
        setBooks(res);
      })
      .catch(error => console.error(error));
  }, []);

  console.log(books);

  return (
    <div>

        <ul>
          {books.map((book: any) => (
            <li key={book.id}>
              <img src={book.thumbnailUrl} alt={book.title} /> 
              <h2>{book.title}</h2>
              <p>{book.description}</p> 
            </li>
          )
          )}
        </ul>
    </div>
  );
}

export default Main;
