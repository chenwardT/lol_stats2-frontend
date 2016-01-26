import React, { Component, PropTypes } from 'react';

export default class StatsTableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.perChampionStats.name}</td>
        <td>{this.props.perChampionStats.role}</td>
        <td>{this.props.perChampionStats.avg_kills.toFixed(2)}</td>
        <td>{this.props.perChampionStats.avg_deaths.toFixed(2)}</td>
        <td>{this.props.perChampionStats.avg_assists.toFixed(2)}</td>
        <td>{this.props.perChampionStats.avg_minions_killed.toFixed(1)}</td>
        <td>{this.props.perChampionStats.avg_gold_earned.toFixed(0)}</td>
      </tr>
    )
  }
}