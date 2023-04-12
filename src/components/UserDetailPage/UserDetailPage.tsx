import React, { useEffect, useState } from 'react';
import { Author } from '../../models/Author';
import { Book } from '../../models/Book';
import { Category } from '../../models/Category';
import BookCard from '../BookCard/BookCard';

function UserDetailPage() {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('https://localhost:8000/my/favorites')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const res = data.favorites.map((book: Book) => {
          const authors = book.authors.map((author: Author) => `${author.lastName}`);
          const categories = book.categories.map((category: Category) => `${category.categoryName}`);
          return { ...book, authors, categories };
        });
        setBooks(res);
      })
      .catch(error => console.error(error));
  }, []);
  console.log(books);
  // useEffect(() => {
  //   fetch('https://localhost:8000/my/borrowed')
  //     .then(response => response.json())
  //     .then(data => {
  //       const res = data.data.map((book: Book) => {
  //         const authors = book.authors.map((author: Author) => `${author.lastName}`);
  //         const categories = book.categories.map((category: Category) => `${category.categoryName}`);
  //         return { ...book, authors, categories };
  //       });
  //       setBooks(res);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div className='UserDetailPage'>
      <div className='favorites'>
        <h1>Your Favorites</h1>
        <div>
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
          </div>
      </div>
      {/* <div className='borrowed'>
        <h1>Your Borrowed Books</h1>
        {books.map((book: Book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div> */}
    </div>
  );
}

export default UserDetailPage;