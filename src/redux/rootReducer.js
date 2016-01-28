import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import stats from './modules/stats'

export default combineReducers({
  stats,
  router
})
