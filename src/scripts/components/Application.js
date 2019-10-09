import './style.scss';
import React, { Component } from 'react';
import axios from 'axios';
import { inject, observer } from 'mobx-react';
import { Link } from '@reach/router';

import Footer from './footer';
import Header from './header';
import GlobalNav from './globalNav';
import TopMoldule from './topModule';
import ProductTable from './productTable';

const jsonPath = 'http://localhost:8080/public/sampleData.json';
// 'https://www.invesco.com/bond-ladder/bondLadder/0?action=getLadderToolData';

@inject('appStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedData: false
    };
  }

  componentDidMount() {
    const { currentProductsInit, setAsOfDate } = this.props.appStore.Product;

    axios.get(jsonPath).then(res => {
      const json = res.data,
        catKeys = Object.keys(json.tickers),
        rawData = catKeys.map(cat => {
          const items = json.tickers[cat].map(item => {
            const catName = cat
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => {
                  return str.toUpperCase();
                }),
              newItem = {
                ...item,
                criteria:
                  catName === 'Emerging' ? `${catName} Markets Debt` : catName
              };
            return newItem;
          });
          return items;
        }),
        flatRaw = [].concat(...rawData);

      currentProductsInit(flatRaw);
      setAsOfDate(json.asOfDate);

      this.setState({
        loadedData: true
      });
    });
  }

  render() {
    const { loadedData } = this.state,
      dataContent = loadedData ? (
        <div className="main-container">
          <TopMoldule product="Mutual Funds" />
          <ProductTable product="Mutual Funds" />
        </div>
      ) : (
        <div className="main-container">Loading</div>
      );

    return (
      <div>
        <GlobalNav region="US" channel="Financial Professional" />
        <Header name="Products" />
        {dataContent}
        <Footer>
          <Link to="./">Prospectus</Link>
          <Link to="./">Program Description</Link>
          <Link to="./">Security</Link>
          <Link to="./">Careers</Link>
          <Link to="./">Terms of Use</Link>
          <Link to="./">Privacy</Link>
          <Link to="./">Legal</Link>
          <Link to="./">Money Market Holdings</Link>
          <Link to="./">FINRA BrokerCheck</Link>
        </Footer>
      </div>
    );
  }
}

export default App;
