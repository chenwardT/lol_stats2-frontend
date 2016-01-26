import { combineReducers } from 'redux';
import { SET_NAME_FILTER, SET_ROLE_FILTER, ADD_CHAMPIONS, RoleFilters } from './actions';

const { SHOW_ALL } = RoleFilters;
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

//function tableSort(state = NAME, action) {
//  switch (action.type) {
//    case
//  }
//}

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

//function stats_table(state = [], action) {
//  switch (action.type) {
//    case 'FILTER_BY_NAME':
//      return state;
//  }
//}

const statsApp = combineReducers({
  roleFilter,
  nameFilter,
  champions
});

export default statsApp;