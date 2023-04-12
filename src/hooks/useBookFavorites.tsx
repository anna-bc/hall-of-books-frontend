import { useState } from 'react';

function useBookFavorites(bookId, token: string) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  
    const fetchFavorites = async () => {
      try {
        const res = await fetch(`https://localhost:8000/my/favorites`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          const isBookFavorite = data.favorites.some(
            fav => fav.id === bookId
          );
          setIsFavorite(isBookFavorite);
        } else {
          console.error('Error fetching favorites:', res.status);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };


  const toggleFavorite  = () =>{
    const url = isFavorite
      ? `https://localhost:8000/my/favorites/remove/${bookId}`
      : `https://localhost:8000/my/favorites/add/${bookId}`;

    fetch(url, {
      method: isFavorite ? 'POST' : 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        if (response.ok) {
          setIsFavorite(!isFavorite);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return [ fetchFavorites, toggleFavorite];
}

export default useBookFavorites