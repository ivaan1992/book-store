import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookCard = (props) => {
  const { book } = props;
  const dispatchRemove = useDispatch();
  const handleRemoveBook = () => {
    dispatchRemove(removeBook(book.id));
  };
  return (
    <li key={book.id} className="bookInfo">
      <p>{book.name}</p>
      <p>{book.author}</p>
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
    </li>
  );
};

BookCard.defaultProps = { book: { name: '', author: '' } };

BookCard.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};
export default BookCard;
