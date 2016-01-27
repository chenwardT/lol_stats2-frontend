import React, { Component, PropTypes } from 'react';

export default class StatsTableHeader extends Component {
  render() {
    return (
      <thead>
      <tr>
        <td data-key="name" onClick={this.props.handleSortChange}>Champion</td>
        <td data-key="role" onClick={this.props.handleSortChange}>Role</td>
        <td data-key="avg_kills" onClick={this.props.handleSortChange}>Kills</td>
        <td data-key="avg_deaths" onClick={this.props.handleSortChange}>Deaths</td>
        <td data-key="avg_assists" onClick={this.props.handleSortChange}>Assists</td>
        <td data-key="avg_minions_killed" onClick={this.props.handleSortChange}>Minions Killed</td>
        <td data-key="avg_gold_earned" onClick={this.props.handleSortChange}>Gold Earned</td>
      </tr>
      </thead>
    )
  }
}