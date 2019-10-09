import React, { Component } from 'react';

class SortRow extends Component {
  constructor() {
    super();

    this.state = {
      sorting: [
        'descending',
        'descending',
        'descending',
        'descending',
        'descending',
        'descending',
        'descending',
        'descending',
        'descending'
      ]
    };
  }

  sortChange = event => {
    event.preventDefault();

    const { sorting } = this.state,
      { sortId } = event.target.dataset,
      tempSorting = sorting,
      currentSort = tempSorting[sortId];

    tempSorting[sortId] =
      currentSort === 'descending' ? 'ascending' : 'descending';

    this.setState({
      sorting: tempSorting
    });
  };

  render() {
    const { asOfDate } = this.props,
      { sorting } = this.state;

    return (
      <thead>
        <tr>
          <th>
            <div
              className={sorting[0]}
              data-sort-id="0"
              onClick={this.sortChange}
              onKeyUp={this.sortChange}
              role="button"
              tabIndex="0"
            >
              Fund Name
            </div>
          </th>
          <th>
            <div className="first-row">
              Average Annual Total Returns (%). As of {asOfDate}
            </div>
            <div className="six-columns">
              <div
                className={sorting[1]}
                data-sort-id="1"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                YTD
              </div>
              <div
                className={sorting[2]}
                data-sort-id="2"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                1YR
              </div>
              <div
                className={sorting[3]}
                data-sort-id="3"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                3YR
              </div>
              <div
                className={sorting[4]}
                data-sort-id="4"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                5YR
              </div>
              <div
                className={sorting[5]}
                data-sort-id="5"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                10YR
              </div>
              <div
                className={sorting[6]}
                data-sort-id="6"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                Since Inception
              </div>
            </div>
          </th>
          <th>
            <div className="first-row">Annual Expense</div>
            <div className="two-columns">
              <div
                className={sorting[7]}
                data-sort-id="7"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                Gross
              </div>
              <div
                className={sorting[8]}
                data-sort-id="8"
                onClick={this.sortChange}
                onKeyUp={this.sortChange}
                role="button"
                tabIndex="0"
              >
                Net
              </div>
            </div>
          </th>
          <th>Fact sheet</th>
        </tr>
      </thead>
    );
  }
}

export default SortRow;
