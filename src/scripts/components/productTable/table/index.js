import './style.scss';
import React, { Component } from 'react';
import { fundData } from '../../helper/constant';

import SortRow from './SortRow';
import FundTypeRow from './FundTypeRow';
import FundRow from './FundRow';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product
    };
  }

  render() {
    const { product } = this.props,
      fundDataRows = fundData.map((data, i) => {
        return (
          <FundRow
            key={i}
            ticker={data.product.ticker}
            returnValues={data.product.returnValues}
            expense={data.product.expense}
            factSheetLink={data.product.factSheetLink}
            content={data}
          >
            {data.product.name}
          </FundRow>
        );
      });

    console.log(product);

    return (
      <table className="main-table">
        <SortRow asOfDate="05/31/2019" />
        <tbody>
          <FundTypeRow first fundType="Alternative - Bank Loans" />
          {fundDataRows[0]}
          {fundDataRows[1]}
          <FundTypeRow fundType="Alternative - Commodities" />
          {fundDataRows[2]}
        </tbody>
      </table>
    );
  }
}

export default Table;
