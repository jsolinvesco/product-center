import './style.scss';
import React, { Component } from 'react';
import MultiOptionButton from '../ui/multiOptionButton';

const productTypeName = [
  'Mutual Funds',
  'Unit Trusts',
  'Exchange-Traded Funds',
  'Money Market & Liquidity Funds',
  'Closed-End Funds',
  'Collective Trust Funds',
  'Separately Managed Accounts',
  'Variable Insurance Funds'
];

class TopMoldule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product
    };
  }

  typeClicked = event => {
    event.preventDefault();

    this.setState({
      product: event.target.textContent
    });
  };

  render() {
    const { product } = this.state,
      productType = productTypeName.map((name, i) => {
        return (
          <button key={i} onClick={this.typeClicked}>
            {name}
          </button>
        );
      });

    return (
      <section className="grid-container flex-container">
        <div className="section-title">
          <MultiOptionButton
            url="#"
            buttonLabel="Product Type"
            className="eyebrow chevron-down"
            anchorDirection="left"
            showSelected
          >
            {productType}
          </MultiOptionButton>
          <h2>{product}</h2>
        </div>
        <div className="section-summary">
          <p>
            We offer a broad range of actively-managed, domestic,
            international/global specialty and fixed income mutual funds to help
            customize investors’ portfolios to their unique needs.
          </p>
        </div>
      </section>
    );
  }
}

export default TopMoldule;
