import './style.scss';
import React, { Component } from 'react';

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: 0,
      totalSelect: props.children.length
    };
  }

  toggleClick = event => {
    event.preventDefault();

    const { selectedId, totalSelect } = this.state,
      { target } = event,
      dataId = parseInt(target.dataset.id, 10),
      nextId =
        // eslint-disable-next-line no-nested-ternary
        totalSelect > 2
          ? dataId
          : selectedId >= totalSelect - 1
          ? 0
          : selectedId + 1;

    if (this.props.action) {
      this.props.action(this.props.children[nextId]);
    }

    this.setState({
      selectedId: nextId
    });
  };

  render() {
    const { children, className } = this.props,
      { selectedId } = this.state,
      childContent = children.map((child, i) => (
        <li key={i} className={selectedId === i ? 'on' : null}>
          <button data-id={i} onClick={this.toggleClick}>
            {child}
          </button>
        </li>
      ));

    return (
      <div className={`toggle-switch${className ? ` ${className}` : ''}`}>
        <ul>{childContent}</ul>
      </div>
    );
  }
}

export default ToggleSwitch;
