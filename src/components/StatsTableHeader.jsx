import React, { Component, PropTypes } from 'react';

export default class StatsTableHeader extends Component {
  render() {
    const rows = [
      {key: 'name', text: 'Champion'},
      {key: 'role', text: 'Role'},
      {key: 'avg_kills', text: 'Kills'},
      {key: 'avg_deaths', text: 'Deaths'},
      {key: 'avg_assists', text: 'Assists'},
      {key: 'avg_minions_killed', text: 'Minions Killed'},
      {key: 'avg_gold_earned', text: 'Gold Earned'}
    ];

    return (
      <thead>
      <tr>
        {rows.map(row => {
          if (this.props.sortKey === row.key) {
            if (this.props.sortDesc) {
              row.text = row.text + '▼';
            } else {
              row.text = row.text + '▲';
            }
          }
          return (
            <td
              key={row.key}
              data-key={row.key}
              onClick={this.props.handleSortChange}
            >
              {row.text}
            </td>
            );
        })}
      </tr>
      </thead>
    )
  }
}