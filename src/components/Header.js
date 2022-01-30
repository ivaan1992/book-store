import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <ul className="links d-flex">
      <h1>Bookstore CMS</h1>
      <li className="">
        <Link className="a book-link" to="/">Books</Link>
      </li>
      <li>
        <Link className="a categories-link" to="/categories">Categories</Link>
      </li>
    </ul>
    <div className="userdiv">
      <FontAwesomeIcon icon={faUser} />
    </div>
  </header>
);

export default Header;
