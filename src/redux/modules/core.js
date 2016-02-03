import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 */
export const SET_STATIC_CHAMPION_DATA = 'SET_STATIC_CHAMPION_DATA'

/*
 * Actions
 */
export const setStaticChampionData = createAction(SET_STATIC_CHAMPION_DATA)

export const actions = {
  setStaticChampionData
}

/*
 * Reducer
 */
export default handleActions({
  [SET_STATIC_CHAMPION_DATA]: (state, {payload}) => (Object.assign({}, { champions: payload }))
}, {
  champions: {}
})
