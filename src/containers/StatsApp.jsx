import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';

import { RoleFilters, setRoleFilter, setNameFilter } from '../actions';
import NameFilter from '../components/NameFilter';
import RoleFilter from '../components/RoleFilter';
import StatsTableHeader from '../components/StatsTableHeader';
import StatsTableRow from '../components/StatsTableRow';

export class StatsContainer extends Component {
  render() {
    // Injected by connect() call
    const { dispatch, visibleChampions } = this.props;

    return (
      <div>
        <div>
          <NameFilter
            handleChange={evt => {
              const nameFilter = evt.target.value;
              console.log(nameFilter);
              dispatch(setNameFilter(nameFilter));
            }}
          />{' '}
          <label htmlFor="role-filter">Role Filter:</label>{' '}
          <RoleFilter
            handleChange={evt => {
              const filter = `SHOW_${evt.target.selectedOptions[0].text.toUpperCase()}`;
              console.log('setRoleFilter: ' + filter);
              dispatch(setRoleFilter(filter));
            }}
            id="role-filter"
          />
        </div>
        <StatsTableContainer
          championStats={visibleChampions}
          sortBy={'avg_gold_earned'}
        />
      </div>
    )
  }
}

class StatsTableContainer extends Component {
  constructor(props) {
    super(props);
    //this.sortTable('name');
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
        <StatsTableHeader
          sortBy={this.sortTable}
        />
        <tbody>
        {this.props.championStats.map(champion =>
        <StatsTableRow
          perChampionStats={champion}
          key={champion.id}
        />
          )}
        </tbody>
      </table>
    )
  }
}

function selectChampionsByRole(champions, roleFilter) {
  switch (roleFilter) {
    case RoleFilters.SHOW_ALL:
      return champions;
    case RoleFilters.SHOW_TOP:
      return champions.filter(champ => champ.role.toUpperCase() === 'TOP');
    case RoleFilters.SHOW_JUNGLE:
      return champions.filter(champ => champ.role.toUpperCase() === 'JUNGLE');
    case RoleFilters.SHOW_MIDDLE:
      return champions.filter(champ => champ.role.toUpperCase() === 'MIDDLE');
    case RoleFilters.SHOW_ADC:
      return champions.filter(champ => champ.role.toUpperCase() === 'ADC');
    case RoleFilters.SHOW_SUPPORT:
      return champions.filter(champ => champ.role.toUpperCase() === 'SUPPORT');
  }
}

function selectChampionsByName(champions, name) {
  return champions.filter(champ => champ.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
}

function selectChampions(state) {
  const selectedChampions = selectChampionsByRole(state.champions, state.roleFilter);
  return selectChampionsByName(selectedChampions, state.nameFilter);
}

function select(state) {
  return {
    visibleChampions: selectChampions(state)
  };
}

export default connect(select)(StatsContainer);