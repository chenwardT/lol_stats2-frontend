import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';

import { RoleFilters, setRoleFilter, setNameFilter, setSort } from '../actions';
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
              dispatch(setNameFilter(nameFilter));
            }}
          />{' '}
          <label htmlFor="role-filter">Role Filter:</label>{' '}
          <RoleFilter
            handleChange={evt => {
              const filter = `SHOW_${evt.target.selectedOptions[0].text.toUpperCase()}`;
              dispatch(setRoleFilter(filter));
            }}
            id="role-filter"
          />
        </div>
        <StatsTableContainer
          championStats={visibleChampions}
          handleSortChange={evt => {
            const key = evt.target.getAttribute('data-key');
            dispatch(setSort(key));
          }}
        />
      </div>
    )
  }
}

class StatsTableContainer extends Component {
  render() {
    return (
      <table className="table">
        <StatsTableHeader
          handleSortChange={this.props.handleSortChange}
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

function sortChampions(champions, sortKey, sortDesc) {
  if (sortKey === 'name' || sortKey === 'role' ) {
    if (!sortDesc) {
      return champions.sort((a, b) => String(a[sortKey]).localeCompare(String(b[sortKey])));
    } else {
      return champions.sort((a, b) => -String(a[sortKey]).localeCompare(String(b[sortKey])));
    }
  } else {
    if (!sortDesc) {
      return champions.sort((a, b) => a[sortKey] - b[sortKey]);
    } else {
      return champions.sort((a, b) => b[sortKey] - a[sortKey]);
    }
  }
}

function selectChampions(champions, roleFilter, nameFilter, sortKey, sortDesc) {
  let selectedChampions = selectChampionsByRole(champions, roleFilter);
  selectedChampions = selectChampionsByName(selectedChampions, nameFilter);
  return sortChampions(selectedChampions, sortKey, sortDesc)
}


function select(state) {
  return {
    visibleChampions: selectChampions(state.champions, state.roleFilter, state.nameFilter,
                                      state.championSort.key, state.championSort.desc),
    sortKey: state.championSort.key,
    sortDesc: state.championSort.desc
  };
}

export default connect(select)(StatsContainer);