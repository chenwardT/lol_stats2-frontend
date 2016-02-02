import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 */
export const SET_MATCHES = 'SET_MATCHES'
export const CLEAR_MATCHES = 'CLEAR_MATCHES'

/*
 * Actions
 */
export const setMatches = createAction(SET_MATCHES)
export const clearMatches = createAction(CLEAR_MATCHES)

export const actions = {
  setMatches,
  clearMatches
}

/*
 * Reducer
 */
// const sampleData = require('./summonerSampleData.json')

export default handleActions({
  [SET_MATCHES]: (state, {payload}) => (Object.assign({}, state, { matches: payload.results })),
  [CLEAR_MATCHES]: (state, _) => (Object.assign({}, state, { matches: 'loading' }))
}, {
  // matches: sampleData.results
  matches: 'loading'
})
