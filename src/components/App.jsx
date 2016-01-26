import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

export default class StatsContainer extends Component {
  render() {
    return (
      <div>
        <FilterContainer />
        <StatsTableContainer
          championStats={this.props.championStats}
          sortBy={'avg_gold_earned'}
        />
      </div>
    )
  }
}

class FilterContainer extends Component {
  render() {
    return (
      <div>
        <NameFilter />{' '}
        <label htmlFor="role-filter">Role Filter:</label>{' '}
        <RoleFilter id="role-filter" />
      </div>
    )
  }
}

class NameFilter extends Component {
  render() {
    return (
      <input type="text" placeholder="Filter by name" />
    )
  }
}

class RoleFilter extends Component {
  render() {
    return (
      <select>
        <option value="top">Top</option>
        <option value="top">Jungle</option>
        <option value="top">Middle</option>
        <option value="top">ADC</option>
        <option value="top">Support</option>
      </select>
    )
  }
}

class StatsTableContainer extends Component {
  constructor(props) {
    super(props);
    this.sortTable('avg_kills', true);
  }

  sortTable(key, desc) {
    if (key === 'name' || key === 'role' ) {
      if (!desc) {
        this.props.championStats.sort((a, b) => String(a[key]).localeCompare(String(b[key])));
      } else {
        this.props.championStats.sort((a, b) => -String(a[key]).localeCompare(String(b[key])));
      }
    } else {
      if (!desc) {
        this.props.championStats.sort((a, b) => a[key] - b[key]);
      } else {
        this.props.championStats.sort((a, b) => b[key] - a[key]);
      }
    }
  }

  render() {
    return (
      <table className="table">
        <StatsTableHeader />
        <tbody>
          {this.props.championStats.map(champion =>
            <StatsTableRow perChampionStats={champion} key={champion.id} />
          )}
        </tbody>
      </table>
    )
  }
}

class StatsTableHeader extends Component {
  render() {
    return (
      <thead>
      <tr>
        <td>Champion</td>
        <td>Role</td>
        <td>Kills</td>
        <td>Deaths</td>
        <td>Assists</td>
        <td>Minions Killed</td>
        <td>Gold Earned</td>
      </tr>
      </thead>
    )
  }
}

class StatsTableRow extends Component {
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