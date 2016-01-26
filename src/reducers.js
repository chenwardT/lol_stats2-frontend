import { combineReducers } from 'redux';
import { SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';

/**
 * State:
 * {
 *  nameFilter: champion_name        <str>,
 *  roleFilter: [top|mid|jg|sup|adc] <str>,
 *  sortColumn: column               <str>,
 *  sortDesc:                        <bool>
 * }
 */

function visibilityFilter(state = ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function stats_table(state = [], action) {
  switch (action.type) {
    case 'FILTER_BY_NAME':
      return
  }
}