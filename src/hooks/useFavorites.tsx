import React, { useEffect, useState } from "react";
import { Book } from "../models/Book";
import { Actions, ActionType } from "../state/actions/Actions";
import { InitialStateType } from "../state/InitialState";

function useFavorites(state: {
  token: string;
  favoritesList: string[];
  dispatch: (value: ActionType) => void;
}) {
  const [favoritesList, setFavoritesList] = useState<string[]>(
    state.favoritesList
  );
  const [favoriteBookId, setFavoritesBookId] = useState<string>("");

  useEffect(() => {
    if (favoriteBookId === "") {
      return;
    }

    if (favoritesList.includes(favoriteBookId)) {
      console.log("removing book from fav");
      fetch(`https://localhost:8000/my/favorites/remove/${favoriteBookId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((res) => res.json())
        .then((content) => {
          if (content.success === true) {
            let favorites: string[] = content.favoriteList.map(
              (book: Book) => book.id
            );
            state.dispatch({
              type: Actions.setFavoritesList,
              payload: { favoritesList: favorites },
            });
            setFavoritesList(favorites);
          }
        });
    } else {
      console.log("add book to fav");
      fetch(`https://localhost:8000/my/favorites/add/${favoriteBookId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((res) => res.json())
        .then((content) => {
          if (content.success === true) {
            let favorites: string[] = content.favoriteList.map(
              (book: Book) => book.id
            );
            state.dispatch({
              type: Actions.setFavoritesList,
              payload: { favoritesList: favorites },
            });
            setFavoritesList(favorites);
          }
        });
    }

  }, [favoriteBookId]);

  return [favoritesList, setFavoritesBookId] as const;
}

export default useFavorites;