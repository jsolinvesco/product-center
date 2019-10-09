import './style.scss';
import React from 'react';
import { Link } from '@reach/router';

import MultiOptionButton from '../ui/multiOptionButton';

const GlobalNav = props => (
  <div id="global-nav">
    <div className="grid-container">
      <ul className="flex-grid ar no-style">
        <li className="al">
          <Link to="#">Invesco Distributors, Inc.</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
        <li>
          <MultiOptionButton
            url="#"
            buttonLabel="Log In"
            className="chevron-down"
            anchorDirection="left"
          >
            User name
            <br />
            Password
          </MultiOptionButton>
        </li>
        <li>
          <MultiOptionButton
            url="#"
            buttonLabel={props.region}
            className="chevron-down"
            anchorDirection="right"
          >
            <Link to="./">United States</Link>
            <Link to="./">Canada (English)</Link>
            <Link to="./">Canada (Français)</Link>

            <Link to="./">United Kingdom</Link>
            <Link to="./">Isle of Man</Link>
            <Link to="./">Jersey</Link>
            <Link to="./">Guernsey</Link>

            <Link to="./">Australia</Link>
            <Link to="./">China</Link>
            <Link to="./">Hong Kong SAR</Link>
            <Link to="./">Japan</Link>
            <Link to="./">Taiwan Retail</Link>

            <Link to="./">Europe</Link>

            <Link to="./">Dubai</Link>

            <Link to="./">Corporate Home</Link>
          </MultiOptionButton>
        </li>
        <li>
          <MultiOptionButton
            url="#"
            buttonLabel={props.channel}
            className="chevron-down"
            anchorDirection="right"
          >
            <Link to="./">Individual Investor</Link>
            <Link to="./">Financial Professional</Link>
            <Link to="./">Registered Investment Advisor</Link>
            <Link to="./">Institutions</Link>
            <Link to="./">Defined Contribution</Link>
          </MultiOptionButton>
        </li>
      </ul>
    </div>
  </div>
);

export default GlobalNav;
