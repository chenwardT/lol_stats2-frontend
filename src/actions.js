/*
 * action types
 */
export const SET_ROLE_FILTER = 'SET_ROLE_FILTER';
export const ADD_CHAMPIONS = 'ADD_CHAMPIONS';

/*
 * other constants
 */
export const RoleFilters = {
  SHOW_ALL:     'SHOW_ALL',
  SHOW_TOP:     'SHOW_TOP',
  SHOW_JUNGLE:  'SHOW_JUNGLE',
  SHOW_MIDDLE:  'SHOW_MIDDLE',
  SHOW_ADC:     'SHOW_ADC',
  SHOW_SUPPORT: 'SHOW_SUPPORT'
};

/*
 * action creators
 */

export function setRoleFilter(filter) {
  return { type: SET_ROLE_FILTER, filter };
}

export function addChampions(champions) {
  return { type: ADD_CHAMPIONS, champions };
}