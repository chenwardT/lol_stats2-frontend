import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 */
export const GET_MATCHES = 'GET_MATCHES'

/*
 * Actions
 */
export const getMatches = createAction(GET_MATCHES)

export const actions = {
  getMatches
}

/*
 * Reducer
 */
const sampleData = require('./summonerSampleData.json')

export default handleActions({
  [GET_MATCHES]: (state, {payload}) => (Object.assign({}, state, { matches: payload.results }))
}, {
  matches: sampleData.results
})
