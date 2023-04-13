import React, { useEffect, useState } from "react";
import { Author } from "../models/Author";
import { Book } from "../models/Book";
import { Category } from "../models/Category";
import { Actions, ActionType } from "../state/actions/Actions";

function useBorrowed(state: {
  token: string;
  borrowedList: string[];
  dispatch: (value: ActionType) => void;
}) {
  const [borrowedList, setBorrowedList] = useState<string[]>(
    state.borrowedList
  );
  const [bookId, setBookId] = useState<string>("");
  const [borrowedBook, setBorrowedBook] = useState<Book>();

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
            const authors = content.book.authors.map(
              (author: Author) => `${author.lastName}`
            );
            const categories = content.book.categories.map(
              (category: Category) => `${category.categoryName}`
            );
            setBorrowedBook({...content.book, authors, categories});
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
            const authors = content.book.authors.map(
              (author: Author) => `${author.lastName}`
            );
            const categories = content.book.categories.map(
              (category: Category) => `${category.categoryName}`
            );
            setBorrowedBook({ ...content.book, authors, categories });
          }
        });
    }

  }, [bookId]);

  return [borrowedList, borrowedBook, setBookId] as const;
}

export default useBorrowed;
