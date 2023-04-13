import { useEffect, useState } from "react";
import { Book } from "../models/Book";
import { InitialStateType } from "../state/InitialState";

function useAddBorrowed(props : {token: string}) {
   const [favoritesList, setFavoritesList] = useState([]);
   const [bookId, setId] = useState('');

   useEffect(() => {
    if (bookId === '') {
      return;
    }
    fetch(`https://localhost:8000/my/borrowed/${bookId}`, {
      headers: {
        Authorization: `Bearer ${props.token}`,
      },
    })
      .then((res) => res.json())
      .then((content) => {
        console.log(content);
        let favorites: [] = content.borrowedList.map((book: Book) => book.id);
        setFavoritesList(favorites);
      });
   }, [bookId]);

   return [favoritesList, setId] as const;
};

export default useAddBorrowed;
