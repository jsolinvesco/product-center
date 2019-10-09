import './style.scss';
import React, { Component } from 'react';

class TopMoldule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product
    };
  }

  render() {
    const { product } = this.state;

    return (
      <section className="grid-container flex-container">
        <div className="section-title">
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
