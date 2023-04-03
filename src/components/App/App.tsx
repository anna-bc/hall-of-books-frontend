import React from 'react';
import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Main />
      
  
    </div>
  );
}

export default App;
