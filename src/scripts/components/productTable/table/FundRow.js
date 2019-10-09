import React, { Component } from 'react';
import RectangularButton from '../../ui/rectangularButton';

import FundContent from './FundContent';

class FundRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      contentExpand: false
    };

    this.myExpandContent = React.createRef();
  }

  expandToggle = () => {
    if (!this.state.expanded) {
      this.setState(
        {
          expanded: true,
          contentExpand: true
        },
        () => {
          setTimeout(() => {
            this.myExpandContent.current.style.opacity = 1;
          }, 250);
        }
      );
    } else {
      this.myExpandContent.current.style.opacity = 0;

      this.setState(
        {
          contentExpand: false
        },
        () => {
          setTimeout(() => {
            this.setState({
              expanded: !this.state.expanded
            });
          }, 350);
        }
      );
    }
  };

  render() {
    const {
        ticker,
        returnValues,
        expense,
        factSheetLink,
        children,
        content
      } = this.props,
      { ytd, yr1, yr3, yr5, yr10, inception, inceptionDate } = returnValues,
      { gross, net } = expense,
      { expanded, contentExpand } = this.state;

    return (
      <tr className={expanded ? 'on' : null}>
        <td colSpan={expanded ? '4' : '1'}>
          <div className="item">
            <div className="item-title">
              <button
                className="expand-btn chevron-down"
                onClick={this.expandToggle}
              />
              <div className="item-name">
                <span className="ticker">{ticker}</span>
                <a href={`http://www.invesco.com/product/${ticker}`}>
                  {children}
                </a>
              </div>
              <div className="expanded-content" ref={this.myExpandContent}>
                <RectangularButton className="icon-star gray small-btn">
                  My List
                </RectangularButton>
                <RectangularButton className="small-btn">
                  Fund Details
                </RectangularButton>
              </div>
            </div>
            <FundContent content={content} expandState={contentExpand} />
          </div>
        </td>
        <td>
          <div className="six-columns">
            <div>{ytd}</div>
            <div>{yr1}</div>
            <div>{yr3}</div>
            <div>{yr5}</div>
            <div>{yr10}</div>
            <div>
              {inception}
              <span className="inception-date">{inceptionDate}</span>
            </div>
          </div>
        </td>
        <td>
          <div className="two-columns">
            <div>{gross}</div>
            <div>{net}</div>
          </div>
        </td>
        <td>
          <a href={factSheetLink} className="icon-pdf">
            Download
          </a>
        </td>
      </tr>
    );
  }
}

export default FundRow;
