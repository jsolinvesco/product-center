import './style.scss';
import React, { Component } from 'react';
import SearchList from './SearchList';

const tempSearchResult = [
  {
    ticker: 'AFRAT',
    name: 'Invesco Floating Rate Fund',
    productId: '00141A863',
    url:
      'https://www.invesco.com/portal/site/us/financial-professional/mutual-funds/'
  },
  {
    ticker: 'AFRAU',
    name: 'Invesco Floating Rate Fund',
    productId: '00141A864',
    url:
      'https://www.invesco.com/portal/site/us/financial-professional/mutual-funds/'
  },
  {
    ticker: 'AFRAV',
    name: 'Invesco Floating Rate Fund',
    productId: '00141A865',
    url:
      'https://www.invesco.com/portal/site/us/financial-professional/mutual-funds/'
  },
  {
    ticker: 'AFRAW',
    name: 'Invesco Floating Rate Fund',
    productId: '00141A866',
    url:
      'https://www.invesco.com/portal/site/us/financial-professional/mutual-funds/'
  },
  {
    ticker: 'AFRAX',
    name: 'Invesco Floating Rate Fund',
    productId: '00141A867',
    url:
      'https://www.invesco.com/portal/site/us/financial-professional/mutual-funds/'
  },
  {
    ticker: 'AFRAY',
    name: 'Invesco Floating Rate Fund',
    productId: '00141A868',
    url:
      'https://www.invesco.com/portal/site/us/financial-professional/mutual-funds/'
  },
  {
    ticker: 'AFRAZ',
    name: 'Invesco Floating Rate Fund',
    productId: '00141A869',
    url:
      'https://www.invesco.com/portal/site/us/financial-professional/mutual-funds/'
  }
];

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: false,
      placeHolder: `Find ${props.productName}`,
      resultLoading: false,
      value: props.value
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (prevProps.value !== value) {
      this.setState({
        value
      });
    }
  }

  onBlur = () => {
    this.setState({
      isFocus: false,
      placeHolder: `Find ${this.props.productName}`
    });
  };

  onFocus = () => {
    this.setState({
      isFocus: true,
      placeHolder: `Search ${this.props.productName} by Name, CUSIP, Ticker`
    });
  };

  onUpdate = event => {
    const { value } = event.target;

    this.setState(
      {
        value
        // placeHolder: value
      },
      () => {
        // this.props.onUpdateDone(value);
      }
    );
  };

  shouldBlur = event => {
    const code = event.keyCode || event.which;
    if (code === 13) event.target.blur();
  };

  render() {
    // const { className, productName } = this.props,
    const { className } = this.props,
      { isFocus, placeHolder, resultLoading, value } = this.state;

    return (
      <div className={`search-box${isFocus ? ' isFocus' : ''}`}>
        <div className="search-input">
          <form action="?">
            <span className="icon-search">Search</span>
            <input
              autoComplete="off"
              className={className || ''}
              maxLength="40"
              onBlur={this.onBlur}
              onChange={this.onUpdate}
              onFocus={this.onFocus}
              onKeyDown={this.shouldBlur}
              onKeyUp={this.onUpdate}
              placeholder={placeHolder}
              type={'text'}
              value={value}
            />
          </form>
          {isFocus ? (
            <div className="search-result">
              <SearchList loading={resultLoading} results={tempSearchResult} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SearchInput;

// isFocus ? (
//     <div>
//       <span className="placeholder">
//         Search {productName} by Name, CUSIP, Ticker
//       </span>
//       <div
//         style={{
//           display: 'block',
//           height: '100px'
//         }}
//       />
//     </div>
