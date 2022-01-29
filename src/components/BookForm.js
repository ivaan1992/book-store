import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const [author, setAuthor] = useState('');
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleAddBook = () => {
    const newBook = {
      name: title,
      author,
      id: Math.ceil(Math.random() * 10000),
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
      <div>
        <input
          id="bookInput"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
        />
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
    </>
  );
};

export default BookForm;
