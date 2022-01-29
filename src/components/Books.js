import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllBooksFromAPI } from '../redux/books/books';
import BookCard from './BookCard';
import BookForm from './BookForm';

const Books = () => {
  const BookList = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setAllBooksFromAPI(dispatch);
  }, []);
  return (
    <>
      <h2>Book container</h2>
      <ul className="library">
        {BookList.map(({
          id, title, author, category,
        }) => (
          <BookCard
            key={id}
            book={{
              id, title, author, category,
            }}
          />
        ))}
      </ul>

      <BookForm />
    </>
  );
};

export default Books;
