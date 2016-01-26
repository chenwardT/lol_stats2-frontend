import React, { Component, PropTypes } from 'react';

export default class StatsTableHeader extends Component {
  render() {
    return (
      <thead>
      <tr>
        <td onClick={e => {
          this.props.sortBy('name');
        }}>Champion</td>
        <td onClick={e => {
          this.props.sortBy('role');
        }}>Role</td>
        <td >Kills</td>
        <td >Deaths</td>
        <td >Assists</td>
        <td >Minions Killed</td>
        <td >Gold Earned</td>
      </tr>
      </thead>
    )
  }
}