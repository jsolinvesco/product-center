import './style.scss';
import React from 'react';
import { Link } from '@reach/router';

const Header = props => (
  <header>
    <div className="grid-container">
      <nav>
        <Link to="http://www.invesco.com" className="icon-invesco-logo">
          Invesco
        </Link>
        <ul>
          <li>
            <Link to="#">Products</Link>
          </li>
          <li>
            <Link to="#">Insights</Link>
          </li>
          <li>
            <Link to="#">Resources</Link>
          </li>
          <li>
            <Link to="#">Literature</Link>
          </li>
          <li>
            <Link to="#">Client Account</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <form action="#" className="search">
              <input type="text" />
              <button className="icon-search">Search</button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="main-title">
        <h1>{props.name}</h1>
      </div>
    </div>
  </header>
);

export default Header;
