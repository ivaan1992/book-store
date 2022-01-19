import React, { useState } from 'react';
import Form from './UI/form';
import Button from './UI/button';

const Books = () => {
  const [books] = useState([]);

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book}</div>
      ))}

      <Form id="books" />
      <Button />
    </div>
  );
};

export default Books;
