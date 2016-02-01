import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { actions as championTableActions, RoleFilters } from 'redux/modules/championTable'
import NameFilter from 'components/ChampionTable/NameFilter'
import RoleFilter from 'components/ChampionTable/RoleFilter'
import TableHeader from 'components/ChampionTable/TableHeader'
import TableRow from 'components/ChampionTable/TableRow'

export class ChampionTableContainer extends Component {
  static propTypes = {
    visibleChampions: PropTypes.array,
    sortKey: PropTypes.string.isRequired,
    sortDesc: PropTypes.bool.isRequired,
    setRoleFilter: PropTypes.func.isRequired,
    setNameFilter: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired
  };

  render() {
    // Injected by connect() call
    const { visibleChampions, sortKey, sortDesc, setRoleFilter, setNameFilter, setSort } = this.props
    return (
      <div>
        <div>
          <NameFilter
            handleChange={evt => {
              const nameFilter = evt.target.value
              setNameFilter(nameFilter)
            }}
          />{' '}
          <label htmlFor='role-filter'>Role Filter:</label>{' '}
          <RoleFilter
            handleChange={evt => {
              const filter = `SHOW_${evt.target.selectedOptions[0].text.toUpperCase()}`
              setRoleFilter(filter)
            }}
            id='role-filter'
          />
        </div>
        <TableContainer
          championStats={visibleChampions}
          handleSortChange={evt => {
            const key = evt.target.getAttribute('data-key')
            setSort(key)
          }}
          sortKey={sortKey}
          sortDesc={sortDesc}
        />
      </div>
    )
  }
}

class TableContainer extends Component {
  static propTypes = {
    sortKey: PropTypes.string.isRequired,
    sortDesc: PropTypes.bool.isRequired,
    handleSortChange: PropTypes.func.isRequired,
    championStats: PropTypes.array
  };

  render() {
    const { sortKey, sortDesc } = this.props

    return (
      <table className='table'>
        <TableHeader
          handleSortChange={this.props.handleSortChange}
          sortKey={sortKey}
          sortDesc={sortDesc}
        />
        <tbody>
        {this.props.championStats.map(champion =>
          <TableRow
            perChampionStats={champion}
            key={champion.id}
          />
        )}
        </tbody>
      </table>
    )
  }
}

/*
 * Selectors
 */

function selectChampionsByRole(champions, roleFilter) {
  switch (roleFilter) {
    case RoleFilters.SHOW_ALL:
      return champions
    case RoleFilters.SHOW_TOP:
      return champions.filter(champ => champ.role.toUpperCase() === 'TOP')
    case RoleFilters.SHOW_JUNGLE:
      return champions.filter(champ => champ.role.toUpperCase() === 'JUNGLE')
    case RoleFilters.SHOW_MIDDLE:
      return champions.filter(champ => champ.role.toUpperCase() === 'MIDDLE')
    case RoleFilters.SHOW_ADC:
      return champions.filter(champ => champ.role.toUpperCase() === 'ADC')
    case RoleFilters.SHOW_SUPPORT:
      return champions.filter(champ => champ.role.toUpperCase() === 'SUPPORT')
  }
}

function selectChampionsByName(champions, name) {
  return champions.filter(champ => champ.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
}

function sortChampions(champions, sortKey, sortDesc) {
  if (sortKey === 'name' || sortKey === 'role') {
    if (!sortDesc) {
      return champions.sort((a, b) => String(b[sortKey]).localeCompare(String(a[sortKey])))
    } else {
      return champions.sort((a, b) => -String(b[sortKey]).localeCompare(String(a[sortKey])))
    }
  } else {
    if (!sortDesc) {
      return champions.sort((a, b) => a[sortKey] - b[sortKey])
    } else {
      return champions.sort((a, b) => b[sortKey] - a[sortKey])
    }
  }
}

function selectChampions(champions, roleFilter, nameFilter, sortKey, sortDesc) {
  let selectedChampions = selectChampionsByRole(champions, roleFilter)
  selectedChampions = selectChampionsByName(selectedChampions, nameFilter)
  return sortChampions(selectedChampions, sortKey, sortDesc)
}

const mapStateToProps = ({championTable}) => ({
  visibleChampions: selectChampions(championTable.champions, championTable.roleFilter, championTable.nameFilter,
                                    championTable.sortKey, championTable.sortDesc),
  sortKey: championTable.sortKey,
  sortDesc: championTable.sortDesc
})

export default connect(mapStateToProps, championTableActions)(ChampionTableContainer)
