import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 */
export const SET_ROLE_FILTER = 'SET_ROLE_FILTER'
export const SET_NAME_FILTER = 'SET_NAME_FILTER'
export const SET_SORT = 'SET_SORT'
export const ADD_CHAMPIONS = 'ADD_CHAMPIONS'

export const RoleFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_TOP: 'SHOW_TOP',
  SHOW_JUNGLE: 'SHOW_JUNGLE',
  SHOW_MIDDLE: 'SHOW_MIDDLE',
  SHOW_ADC: 'SHOW_ADC',
  SHOW_SUPPORT: 'SHOW_SUPPORT'
}

/*
 * Actions
 */

export const setRoleFilter = createAction(
  SET_ROLE_FILTER,
  (roleFilter = RoleFilters.SHOW_ALL) => roleFilter
)
export const setNameFilter = createAction(SET_NAME_FILTER)
export const setSort = createAction(SET_SORT)
export const addChampions = createAction(ADD_CHAMPIONS)

export const actions = {
  setRoleFilter,
  setNameFilter,
  setSort,
  addChampions
}

/*
 * Reducer
 */

// For now, load data from json file.
// Later, get from our REST API (e.g. /champion-stats/6.1).
const sampleData = require('./statsSampleData.json')

export default handleActions({
  [SET_ROLE_FILTER]: (state, {payload}) => (Object.assign({}, state, { roleFilter: payload })),
  [SET_NAME_FILTER]: (state, {payload}) => (Object.assign({}, state, { nameFilter: payload })),
  [SET_SORT]: (state, {payload}) => (Object.assign({}, state, { sortKey: payload, sortDesc: !state.sortDesc })),
  [ADD_CHAMPIONS]: (state, {payload}) => (Object.assign({}, state, { champions: payload }))
}, {
  roleFilter: RoleFilters.SHOW_ALL,
  nameFilter: '',
  sortKey: 'name',
  sortDesc: true,
  champions: sampleData
})
