import { combineReducers } from 'redux';
import { SET_NAME_FILTER, SET_ROLE_FILTER, SET_SORT, ADD_CHAMPIONS,
         RoleFilters, SortKeys } from './actions';

const { SHOW_ALL } = RoleFilters;
const { NAME } = SortKeys;
/**
 * State format:
 * {
 *  nameFilter: championName          <str>
 *  roleFilter: SHOW_ALL|SHOW_TOP|etc <str>
 *
 *  sortColumn: columnName            <str>
 *  sortDesc:   true|false            <bool>
 *
 *  champions: ChampionStats          <array of objs>
 * }
 */

function roleFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_ROLE_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function nameFilter(state = '', action) {
  switch (action.type) {
    case SET_NAME_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function championSort(state = {key: NAME}, action) {
  switch (action.type) {
    case SET_SORT:
      return {key: action.key, desc: !state.desc};
    default:
      return state;
  }
}

function champions(state = [], action) {
  switch (action.type) {
    case ADD_CHAMPIONS:
      return Object.assign({}, state, {
        champions: action.champions
      });
    default:
      return state;
  }
}

const statsApp = combineReducers({
  roleFilter,
  nameFilter,
  championSort,
  champions
});

export default statsApp;