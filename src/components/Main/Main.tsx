import React, { useEffect, useState } from 'react';
import { Author } from '../../models/Author';
import { Book } from '../../models/Book';

import './Main.scss';

function Main() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('https://localhost:8000/books/')
      .then(response => response.json())
      .then(data => {
        const res = data.data.map((book: Book) => {
          const authors = book.authors.map((author: Author) => `${author.lastName}`);
          return { ...book, authors };
        });
        setBooks(res);
      })
      .catch(error => console.error(error));
  }, []);

  console.log(books);

  return (
        <div className='Main'>
          {books.map((book: Book) => (
            //<BookCard key={book.id} book={book}/>
            <div key={book.id}>{book.title}</div>
          )
          )}
        </div>
  );
}

export default Main;