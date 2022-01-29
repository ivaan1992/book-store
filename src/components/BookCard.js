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
    <li className="bookInfo d-flex">
      <p>{book.id}</p>
      <div className="book-author">
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>

      </div>
      <button className="Remove" type="button" onClick={handleRemoveBook}>
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
