import React, { Component, PropTypes } from 'react';

export default class NameFilter extends Component {
  render() {
    return (
      <input
        type="text"
        placeholder="Filter by name"
        onChange={this.props.handleChange}
      />
    )
  }
}