import React, { useEffect, useState } from "react";
import { Book } from "../models/Book";
import { Actions, ActionType } from "../state/actions/Actions";
import { InitialStateType } from "../state/InitialState";

function useBorrowed(state: {
  token: string;
  borrowedList: string[];
  dispatch: (value: ActionType) => void;
}) {
  const [borrowedList, setBorrowedList] = useState<string[]>(
    state.borrowedList
  );
  const [bookId, setBookId] = useState<string>("");

  useEffect(() => {
    if (bookId === "") {
      return;
    }

    if (borrowedList.includes(bookId)) {
      console.log("returning book");
      fetch(`https://localhost:8000/my/borrowed/return/${bookId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((res) => res.json())
        .then((content) => {
          console.log(content);
          if (content.success === true) {
            let borrowed: string[] = content.borrowedList.map(
              (book: Book) => book.id
            );
            state.dispatch({
              type: Actions.setBorrowedList,
              payload: { borrowedList: borrowed },
            });
            setBorrowedList(borrowed);
          }
        });
    } else {
      console.log("borrowing book");
      fetch(`https://localhost:8000/my/borrowed/${bookId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((res) => res.json())
        .then((content) => {
          console.log(content);
          if (content.success === true) {
            let borrowed: string[] = content.borrowedList.map(
              (book: Book) => book.id
            );
            state.dispatch({
              type: Actions.setBorrowedList,
              payload: { borrowedList: borrowed },
            });
            setBorrowedList(borrowed);
          }
        });
    }

  }, [bookId]);

  return [borrowedList, setBookId] as const;
}

export default useBorrowed;
