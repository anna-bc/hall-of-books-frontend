import React from 'react';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Main/>
    </div>
  );
}

export default App;