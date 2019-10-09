import './style.scss';
import React, { Component } from 'react';
import ToggleSwitch from '../ui/toggleSwitch';
import RectangularButton from '../ui/rectangularButton';
import SearchInput from '../ui/inputFields/SearchInput';

import Table from './table';

class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: props.product
    };
  }

  toggleTest = toggleText => {
    console.log(`Testing toggle button: ${toggleText}`);
  };

  render() {
    const { product } = this.state;

    return (
      <section className="grid-container">
        <nav className="table-nav">
          <ToggleSwitch action={this.toggleTest} className="duration">
            {['Monthly', 'Quarterly']}
          </ToggleSwitch>
          <ToggleSwitch action={this.toggleTest} className="value-type">
            {['NAV', 'Load']}
          </ToggleSwitch>
          <RectangularButton className="option-btn">
            Filter by
          </RectangularButton>
          <SearchInput productName={product} />
        </nav>
        <div className="table-container">
          <Table product />
        </div>
      </section>
    );
  }
}

export default ProductTable;
