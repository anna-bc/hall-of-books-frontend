import { useEffect, useState } from "react";
import { Book } from "../models/Book";
import { InitialStateType } from "../state/InitialState";

function useAddBorrowed(props : {token: string}) {
   const [favoritesList, setFavoritesList] = useState([]);
   const [bookId, setId] = useState('');
   console.log(props.token);

   useEffect(() => {
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

   useEffect(() => {
      console.log('waiting to add borrowed');
   }, []);

   return [favoritesList, setId];
};

export default useAddBorrowed;
