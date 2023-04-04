import React, { useEffect, useState } from 'react';
import { Book } from '../../Models/Book';
import { Author } from '../../Models/Author';
import './Main.scss';
import BookCard from '../BookCard/BookCard';

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
            <BookCard key={book.id} book={book}/>
          )
          )}
        </div>
  );
}

export default Main;