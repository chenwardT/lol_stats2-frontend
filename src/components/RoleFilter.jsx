import React, { Component, PropTypes } from 'react'

export default class RoleFilter extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <select onChange={this.props.handleChange}>
        <option value='all'>All</option>
        <option value='top'>Top</option>
        <option value='jungle'>Jungle</option>
        <option value='middle'>Middle</option>
        <option value='adc'>ADC</option>
        <option value='support'>Support</option>
      </select>
    )
  }
}
