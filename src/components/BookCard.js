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
      <div className="book-author">
        <p className="category">{book.category}</p>
        <h3>{book.title}</h3>
        {/* <p className="author">{book.author}</p> */}
        <div className="d-flex">
          <button className="li-buttons" type="button">Comments</button>
          <button className="li-buttons" onClick={handleRemoveBook} type="button">Remove</button>
          <button className="li-buttons" type="button">Edit</button>
        </div>
      </div>
      <div className="left d-flex">
        <div className="porcentage">
          <div className="wrapper" data-anim="base wrapper">
            <div className="circle" data-anim="base left" />
            <div className="circle" data-anim="base right" />
          </div>
          <div className="presentage d-flex">
            <span className="pres">
              50%
            </span>
            <span className="completed">
              Completed
            </span>
          </div>
        </div>
      </div>
      <div className="border d-flex">
        <span className="completed">Current Chapter</span>
        <span className="lesson">Chapter 17</span>
        <button className="Remove" type="button">Update progress</button>
      </div>
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
