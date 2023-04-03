import React from 'react';
import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import Navbar from '../Navbar/Navbar';
import BookCard from '../BookCard/BookCard';
import { Book } from '../../Models/Book';


function App() {
    const book: Book = { 
    id: 1,
    title: 'Gone Girl',
    thumbnailUrl: 'http://books.google.com/books/content?id=hxL2qWMAgv8C&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71q-Gv3OQM1sK9cYHBEkCWViGMsZKfwzLRuyBjQtuqXZ5y6ArSxlUKr918yYYg_eHC31HSma3FOZGhiS6iJufx-x80eye7YTem__3DdQrYsGJ1A_S4Y9hrEXoZL9KLlx94VskqK&source=gbs_api',
    description: 'This is an example description.',
    authors: ['Author 1', 'Author 2'],
    average_rating: 3.5,
    num_available: 5,
  };

  return (
    <div className="App">
    <Navbar />
      <SearchBar />
      <BookCard book={book} />
    </div>
  );
}

export default App;
