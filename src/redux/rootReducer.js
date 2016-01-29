import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import stats from './modules/stats'
import summoner from './modules/summoner'

export default combineReducers({
  stats,
  summoner,
  router
})
