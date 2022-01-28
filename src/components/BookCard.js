import React from "react";
import PropTypes from "prop-types";

const BookCard = (props) => {
  const { book } = props;
  return (
    <li key={book.id} className="bookInfo">
      <p>{book.name}</p>
      <p>{book.author}</p>
      <button type="button">Remove</button>
    </li>
  );
};

BookCard.defaultProps = { book: { name: "", author: "" } };

BookCard.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string,
      author: PropTypes.string,
    })
  ),
};
export default BookCard;
