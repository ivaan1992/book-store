import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const BookCard = ({ book }) => {
  const dispatchRemove = useDispatch();
  const handleRemoveBook = () => {
    removeBookAsync(book.id)(dispatchRemove);
  };
  return (
    <li className="bookInfo">
      <p>{book.id}</p>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
    </li>
  );
};

BookCard.defaultProps = {
  book: { title: '', author: '', id: '' },
};

BookCard.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      id: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};
export default BookCard;
