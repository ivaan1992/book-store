import React, { useState } from 'react';
import Form from './UI/form';
import Button from './UI/button';

const Books = () => {
  const [books] = useState([]);
  return (
    <div>
        <Form id="Add-books" />
        <Button />
    </div>
  );
};

export default Books;