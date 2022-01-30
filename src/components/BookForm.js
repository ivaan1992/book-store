import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/books';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  /* const [author, setAuthor] = useState('');
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  }; */
  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleAddBook = () => {
    const newBook = {
      title,
      // author,
      category,
      id: Math.ceil(Math.random() * 10000),
    };
    dispatch(addBookAsync(newBook));
  };
  return (
    <>
      <div className="book-form">
        <h2>ADD NEW BOOK</h2>
        <input
          id="bookInput"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          placeholder="author"
          value={author}
          onChange={handleAuthor}
        /> */}
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={handleCategory}
        />
        <button className="Add" type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </div>
    </>
  );
};

export default BookForm;
