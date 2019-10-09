import React from 'react';

const FundTypeRow = props => {
  const { first, fundType } = props;

  return first ? (
    <tr>
      <td className="full-width-row" colSpan="4">
        <div className="fund-type">{fundType}</div>
      </td>
    </tr>
  ) : (
    <tr>
      <td className="full-width-row" colSpan="4">
        <div className="spacer-row">{'\u00A0'}</div>
        <div className="fund-type">{fundType}</div>
      </td>
    </tr>
  );
};

export default FundTypeRow;
