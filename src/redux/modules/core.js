import { createAction, handleActions } from 'redux-actions'

/*
 * Constants
 */
export const SET_STATIC_CHAMPION_DATA = 'SET_STATIC_CHAMPION_DATA'
export const SET_STATIC_SPELL_DATA = 'SET_STATIC_SPELL_DATA'
export const SET_STATIC_ITEM_DATA = 'SET_STATIC_ITEM_DATA'

/*
 * Actions
 */
export const setStaticChampionData = createAction(SET_STATIC_CHAMPION_DATA)
export const setStaticSpellData = createAction(SET_STATIC_SPELL_DATA)
export const setStaticItemData = createAction(SET_STATIC_ITEM_DATA)

export const actions = {
  setStaticChampionData,
  setStaticSpellData,
  setStaticItemData
}

/*
 * Reducer
 */
export default handleActions({
  [SET_STATIC_CHAMPION_DATA]: (state, {payload}) => (Object.assign({}, state, { champions: payload })),
  [SET_STATIC_SPELL_DATA]: (state, {payload}) => (Object.assign({}, state, { spells: payload })),
  [SET_STATIC_ITEM_DATA]: (state, {payload}) => (Object.assign({}, state, { items: payload }))
}, {
  champions: {},
  spells: {},
  items: {}
})
