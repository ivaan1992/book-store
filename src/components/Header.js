import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="d-flex">
      <h1>Bookstore CMS</h1>
      <ul className="links d-flex">
        <li className="">
          <Link className="a book-link" to="/">Books</Link>
        </li>
        <li>
          <Link className="a categories-link" to="/categories">Categories</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
