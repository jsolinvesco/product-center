import React from 'react';

const SearchList = props => {
  const { loading, results } = props,
    resultList = results.map((result, i) => {
      return (
        <li key={i}>
          <a href={result.url}>
            <span>{result.ticker}</span>
            <span>{result.name}</span>
            <span>{result.productId}</span>
          </a>
        </li>
      );
    });

  return loading ? <div className="loading" /> : <ul>{resultList}</ul>;
};

export default SearchList;
