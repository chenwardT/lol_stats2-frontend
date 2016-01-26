/*
 * action types
 */
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */
export const VisibilityFilters = {
  ALL:     'ALL',
  TOP:     'TOP',
  JUNGLE:  'JUNGLE',
  MIDDLE:  'MIDDLE',
  ADC:     'ADC',
  SUPPORT: 'SUPPORT'
};

/*
 * action creators
 */

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}