import './style.scss';
import React, { Component } from 'react';

import SortRow from './SortRow';
import FundTypeRow from './FundTypeRow';
import FundRow from './FundRow';

const fundDataContent = [
  {
    objective: {
      paragraph:
        'The fund seeks total return, comprised of current income and capital appreciation by investing at least 80% of its net assets, plus the amount of any borrowings for investment purposes.'
    },
    documents: [
      {
        title: 'Prospectus',
        url: 'http://www.invesco/Prospectus'
      },
      {
        title: 'Fact Sheet',
        url: 'http://www.invesco.com/Fact_sheet'
      },
      {
        title: 'Commentary',
        url: 'http://www.invesco.com/Commentary'
      },
      {
        title: 'Q2 2018 Holdings',
        url: 'http://www.invesco.com/q2_2018_holdings'
      },
      {
        title: 'Q3 2018 Holdings',
        url: 'http://www.invesco.com/q3_2018_holdings'
      },
      {
        title: 'Q4 2018 Holdings',
        url: 'http://www.invesco.com/q4_2018_holdings'
      },
      {
        title: 'Q1 2019 Holdings',
        url: 'http://www.invesco.com/q1_2019_holdings'
      }
    ],
    performance: {
      nav: '$7.43',
      asOfDate: '07/17/2019',
      change: '-0.01',
      maxLoad: '3.25%'
    }
  },
  {
    objective: {
      paragraph:
        'The fund seeks total return, comprised of current income and capital appreciation by investing at least 80% of its net assets, plus the amount of any borrowings for investment purposes.'
    },
    documents: [
      {
        title: 'Prospectus',
        url: 'http://www.invesco/Prospectus'
      },
      {
        title: 'Fact Sheet',
        url: 'http://www.invesco.com/Fact_sheet'
      },
      {
        title: 'Commentary',
        url: 'http://www.invesco.com/Commentary'
      },
      {
        title: 'Q2 2018 Holdings',
        url: 'http://www.invesco.com/q2_2018_holdings'
      },
      {
        title: 'Q3 2018 Holdings',
        url: 'http://www.invesco.com/q3_2018_holdings'
      },
      {
        title: 'Q4 2018 Holdings',
        url: 'http://www.invesco.com/q4_2018_holdings'
      },
      {
        title: 'Q1 2019 Holdings',
        url: 'http://www.invesco.com/q1_2019_holdings'
      }
    ],
    performance: {
      nav: '$4.28',
      asOfDate: '07/17/2019',
      change: '+0.05',
      maxLoad: '2.76%'
    }
  },
  {
    objective: {
      paragraph:
        'The fund seeks total return, comprised of current income and capital appreciation by investing at least 80% of its net assets, plus the amount of any borrowings for investment purposes.'
    },
    documents: [
      {
        title: 'Prospectus',
        url: 'http://www.invesco/Prospectus'
      },
      {
        title: 'Fact Sheet',
        url: 'http://www.invesco.com/Fact_sheet'
      },
      {
        title: 'Commentary',
        url: 'http://www.invesco.com/Commentary'
      },
      {
        title: 'Q2 2018 Holdings',
        url: 'http://www.invesco.com/q2_2018_holdings'
      },
      {
        title: 'Q3 2018 Holdings',
        url: 'http://www.invesco.com/q3_2018_holdings'
      },
      {
        title: 'Q4 2018 Holdings',
        url: 'http://www.invesco.com/q4_2018_holdings'
      },
      {
        title: 'Q1 2019 Holdings',
        url: 'http://www.invesco.com/q1_2019_holdings'
      }
    ],
    performance: {
      nav: '$5.80',
      asOfDate: '07/17/2019',
      change: '0.00',
      maxLoad: '4.90%'
    }
  }
];

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product
    };
  }

  render() {
    const { product } = this.state;

    console.log(product);

    return (
      <table className="main-table">
        <SortRow asOfDate="05/31/2019" />
        <tbody>
          <FundTypeRow first fundType="Alternative - Bank Loans" />

          <FundRow
            ticker="AFRAX"
            returnValues={{
              ytd: 4.88,
              yr1: 2.33,
              yr3: '5.70',
              yr5: 3.06,
              yr10: 7.48,
              inception: 4.09,
              inceptionDate: '05/01/1997'
            }}
            expense={{ gross: 1.09, net: 1.08 }}
            factSheetLink="http://www.invesco.com/factsheet"
            content={fundDataContent[0]}
          >
            Invesco Floating Rate Fund
          </FundRow>
          <FundRow
            ticker="VSLAX"
            returnValues={{
              ytd: 5.68,
              yr1: 2.47,
              yr3: 6.38,
              yr5: 3.69,
              yr10: 7.62,
              inception: 3.58,
              inceptionDate: '05/01/1997'
            }}
            expense={{ gross: 2.06, net: 2.06 }}
            factSheetLink="http://www.invesco.com/factsheet"
            content={fundDataContent[1]}
          >
            Invesco Senior Floating Rate Fund
            <sup href="#term1">1</sup>
          </FundRow>

          <FundTypeRow fundType="Alternative - Commodities" />

          <FundRow
            ticker="BRCAX"
            returnValues={{
              ytd: 4.88,
              yr1: 2.33,
              yr3: '5.70',
              yr5: 3.06,
              yr10: 7.48,
              inception: 4.09,
              inceptionDate: '05/01/1997'
            }}
            expense={{ gross: 1.09, net: 1.08 }}
            factSheetLink="http://www.invesco.com/factsheet"
            content={fundDataContent[2]}
          >
            Invesco Balanced-Risk Commodity Strategy Fund
            <sup href="#term1">1</sup>
          </FundRow>
        </tbody>
      </table>
    );
  }
}

export default Table;
