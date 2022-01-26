import React from 'react';
import Form from './UI/form';

const bookInfo = {
  title: 'Romeo & Juliet',
  author: 'Shakespeare',
  id: 1,
};

const List = () => (
  <li>
    {bookInfo.title}
    <br />
    {bookInfo.author}
    <br />
    {bookInfo.id}
    <br />
    <button type="button">Remove</button>
  </li>
);

const Books = () => (
  <div>
    <ul>
      <List />
    </ul>
    <Form id="books" />
  </div>
);

export default Books;
