import './style.scss';
import React from 'react';
import ToggleSwitch from '../ui/toggleSwitch';
import RectangularButton from '../ui/rectangularButton';

import Table from './table';

const ProductTable = props => {
  const { product } = props,
    toggleTest = toggleText => {
      console.log(`Testing toggle button: ${toggleText}`);
    };

  return (
    <section className="grid-container">
      <nav className="table-nav">
        <ToggleSwitch action={toggleTest} className="duration">
          {['Monthly', 'Quarterly']}
        </ToggleSwitch>
        <ToggleSwitch action={toggleTest} className="value-type">
          {['NAV', 'Load']}
        </ToggleSwitch>
        <RectangularButton className="option-btn">Filter by</RectangularButton>
      </nav>
      <div className="table-container">
        <Table product={product} />
      </div>
    </section>
  );
};

export default ProductTable;
