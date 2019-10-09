import './style.scss';
import React, { Component } from 'react';
import SearchList from './SearchList';

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocus: false,
      placeHolder: 'Search Funds',
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
      placeHolder: 'Search Funds'
    });
  };

  onFocus = () => {
    this.setState({
      isFocus: true,
      placeHolder: `Search ${this.props.selectedType} by Name, CUSIP, Ticker`
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
    const { className, productList } = this.props,
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
              <SearchList loading={resultLoading} results={productList} />
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
