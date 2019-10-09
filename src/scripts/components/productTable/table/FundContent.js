import React, { Component } from 'react';

class FundExpand extends Component {
  constructor() {
    super();

    this.state = {
      display: 'none',
      height: 'auto',
      itemOn: false
    };

    this.myExpander = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { expandState } = this.props;

    if (prevProps.expandState === false && expandState) {
      this.setState(
        {
          display: 'flex'
        },
        () => {
          const myExpanderHeight =
            this.myExpander.current.clientHeight + 40 + 10;

          this.setState(
            {
              height: '0'
            },
            () => {
              setTimeout(() => {
                this.setState({
                  height: `${myExpanderHeight}px`,
                  itemOn: true
                });
              }, 50);
            }
          );
        }
      );
    }

    if (!expandState && prevProps.expandState === true) {
      this.setState(
        {
          height: '0'
        },
        () => {
          setTimeout(() => {
            this.setState({
              display: 'none',
              height: `auto`,
              itemOn: false
            });
          }, 350);
        }
      );
    }
  }

  render() {
    const { content } = this.props,
      { display, height, itemOn } = this.state,
      documentList = content.documents.map((document, i) => {
        return (
          <li key={i}>
            <a href={document.url}>{document.title}</a>
          </li>
        );
      }),
      changeValue = content.performance.change;

    return (
      <div
        className={`item-content${itemOn ? ' on' : ''}`}
        ref={this.myExpander}
        style={{ display, height }}
      >
        <div className="column">
          <div className="row objective">
            <h4>Objective & Overview</h4>
            <p>{content.objective.paragraph}</p>
          </div>
          <div className="row performance-results">
            <div className="nav">
              <div className="nav-row">
                <h4>
                  NAV{' '}
                  <span className="as-of-date">{`(as of ${
                    content.performance.asOfDate
                  })`}</span>
                </h4>
                <div className="change-label">Change ($)</div>
              </div>
              <div className="nav-row">
                <div className="value">{content.performance.nav}</div>
                <div
                  className={`change-value${
                    // eslint-disable-next-line no-nested-ternary
                    changeValue.charAt(0) === '-'
                      ? ' negative'
                      : changeValue.charAt(0) === '+'
                      ? ' positive'
                      : ''
                  }`}
                >
                  {changeValue}
                </div>
              </div>
            </div>
            <div className="max-load">
              <h4>Max Load</h4>
              <div className="value">{content.performance.maxLoad}</div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="documents">
            <h4>Documents</h4>
            <ul className="document-list">{documentList}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FundExpand;
