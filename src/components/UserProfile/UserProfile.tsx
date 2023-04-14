import React, { useEffect, useState, useContext } from 'react';
import { Author } from '../../models/Author';
import { Book } from '../../models/Book';
import { Category } from '../../models/Category';
import BookCard from '../BookCard/BookCard';
import { StateContext } from '../../state/context/StateContext';
import './UserProfile.scss';
import { User } from '../../models/User';

function UserDetailPage() {

  const [books, setBooks] = useState<Book[]>([]);
  const { state } = useContext(StateContext);
  const [selectedTab, setSelectedTab] = useState<string>('favorites');
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [showUserInfo, setShowUserInfo] = useState<boolean>(false); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:8000/my/${selectedTab}`, {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${state.token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          const res = data[selectedTab].map((book: Book) => { 
            const authors = book.authors.map((author: Author) => `${author.lastName}`);
            const categories = book.categories.map((category: Category) => `${category.categoryName}`);
            return { ...book, authors, categories };
          });
          setBooks(res);
          console.log(books)
        } else {
          console.error(`Error fetching ${selectedTab}:`, response.status);
        }
      } catch (error) {
        console.error(`Error fetching ${selectedTab}:`, error);
      }
    };
    fetchData();
  }, [selectedTab]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab); 
  }

  const handleShowUserInfo = async () => {
    try {
      const response = await fetch(`https://localhost:8000/user/info`, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${state.token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.user);
        setUserInfo(data.user); 
        setShowUserInfo(true);
      } else {
        console.error('Error fetching user info:', response.status);
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  }

    const handleHideUserInfo = () => {
      setShowUserInfo(false);
      setUserInfo(null); 
    }
  
  return (
    <div className="UserProfile">
      <div className="UserProfile__info">
        <button
          onClick={showUserInfo ? handleHideUserInfo : handleShowUserInfo}
        >
          {showUserInfo
            ? "Hide Personal Information"
            : "Show Personal Information"}
        </button>
        {userInfo && (
          <div className="UserProfile__info__infos">
            <p>First Name: {userInfo.firstName}</p>
            <p>Last Name: {userInfo.lastName}</p>
            <p>Date of Registration: {userInfo.registrationDate}</p>
          </div>
        )}
      </div>
      <div className="UserProfile__tabs">
        <button
          className={`UserProfile__tabs__button ${
            selectedTab === "favorites"
              ? "UserProfile__tabs__button--active"
              : ""
          }`}
          onClick={() => handleTabChange("favorites")}
        >
          Favorites
        </button>
        <button
          className={`UserProfile__tabs__button ${
            selectedTab === "borrowed"
              ? "UserProfile__tabs__button--active"
              : ""
          }`}
          onClick={() => handleTabChange("borrowed")}
        >
          Borrowed
        </button>
      </div>
      <div className="UserProfile__wrapper">
        <h3 className="UserProfile__wrapper__title">
          {selectedTab === "favorites" ? "My Favorites" : "My Borrowed Books"}
        </h3>
        <div className="UserProfile__wrapper__books">
          {books.map((book: Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserDetailPage;
