import React, { Component, PropTypes } from 'react'

export default class NameFilter extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <input
        type='text'
        placeholder='Filter by name'
        onChange={this.props.handleChange}
      />
    )
  }
}
