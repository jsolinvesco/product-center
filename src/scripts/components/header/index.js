import './style.scss';
import React from 'react';
import { Link } from '@reach/router';

import MultiOptionButton from '../ui/multiOptionButton';
import SearchInput from '../ui/inputFields/SearchInput';

import { productTypeName } from '../helper/constant';

const Header = props => {
  const { name, selectedType, updateProductType } = props,
    typeClicked = event => {
      event.preventDefault();
      const { textContent } = event.target;

      updateProductType(textContent);
    },
    productType = productTypeName.map((typeName, i) => {
      return (
        <button key={i} onClick={typeClicked}>
          {typeName}
        </button>
      );
    });

  return (
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
          <h1>{name}</h1>
          <div className="search-nav">
            <MultiOptionButton
              url="#"
              buttonLabel="Product Type"
              className="eyebrow chevron-down"
              anchorDirection="left"
              showSelected
            >
              {productType}
            </MultiOptionButton>
            <SearchInput productName={selectedType} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
