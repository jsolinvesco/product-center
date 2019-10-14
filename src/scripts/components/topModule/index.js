import './style.scss';
import React, { Component } from 'react';
import { fundData } from '../helper/constant';

class TopMoldule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spotlightOn: true
    };
  }

  spotlightOff = event => {
    event.preventDefault();

    this.setState({
      spotlightOn: false
    });
  };

  render() {
    const { spotlightOn } = this.state,
      spotlightList = fundData.map((data, i) => {
        return (
          <li key={i}>
            <a href={data.product.url}>
              <div className="icon-zipDrive">
                <div className="fund-type">{data.product.fundType}</div>
                <span className="ticker">{data.product.ticker}</span>
              </div>
              <div className="type-class">{data.product.typeClass}</div>
              <h5>{data.product.name}</h5>
              <div className="inception-date">
                Inception Date: {data.product.returnValues.inceptionDate}
              </div>
            </a>
            <button className="my-list" />
          </li>
        );
      });

    return (
      <section className="grid-container">
        <div className="flex-container">
          <div className="section-title">
            <h2>{this.props.product}</h2>
          </div>
          <div className="section-summary">
            <p>
              We offer a broad range of actively-managed, domestic,
              international/global specialty and fixed income mutual funds to
              help customize investors’ portfolios to their unique needs.
            </p>
          </div>
        </div>
        <div className={`product-spotlight${spotlightOn ? ' on' : ''}`}>
          <div className="title">
            <h4>Product Spotlight</h4>
            <button onClick={this.spotlightOff}>Close</button>
          </div>
          <div className="scroller">
            <ul className="list">{spotlightList}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default TopMoldule;
