import React, { useEffect, useState } from 'react';
import { Author } from '../../models/Author';
import { Book } from '../../models/Book';
import { Category } from '../../models/Category';
import BookCard from '../BookCard/BookCard';
import './Main.scss';

function Main() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('https://localhost:8000/books/')
      .then(response => response.json())
      .then(data => {
        const res = data.data.map((book: Book) => {
          const authors = book.authors.map((author: Author) => `${author.lastName}`);
          const categories = book.categories.map((category: Category) => `${category.categoryName}`);
          return { ...book, authors, categories };
        });
        setBooks(res);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="Main">
      <h3 className="Main__title">10 newest releases</h3>
      <div className="Main__books">
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Main;