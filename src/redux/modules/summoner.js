import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 */
export const SET_MATCHES = 'SET_MATCHES'

/*
 * Actions
 */
export const setMatches = createAction(SET_MATCHES)

export const actions = {
  setMatches
}

/*
 * Reducer
 */
const sampleData = require('./summonerSampleData.json')

export default handleActions({
  [SET_MATCHES]: (state, {payload}) => (Object.assign({}, state, { matches: payload.results }))
}, {
  matches: sampleData.results
})
