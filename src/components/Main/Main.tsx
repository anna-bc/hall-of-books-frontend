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
        <div className='Main'>
          {books.map((book: any) => (
            //<BookCard />
            <div></div>
          )
          )}
        </div>
  );
}

export default Main;