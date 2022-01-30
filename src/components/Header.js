import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <div className="d-flex header">
      <h1>Bookstore CMS</h1>
      <ul className="links d-flex">
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
    </div>
  </header>
);

export default Header;
