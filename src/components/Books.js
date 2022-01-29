import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import BookForm from './BookForm';

const Books = () => {
  const BookList = useSelector((state) => state.booksReducer);
  return (
    <>
      <h2>Book container</h2>
      <ul className="library">
        {BookList.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </ul>

      <BookForm />
    </>
  );
};

export default Books;
