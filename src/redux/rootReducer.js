import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import championTable from './modules/championTable'
import summoner from './modules/summoner'

export default combineReducers({
  championTable,
  summoner,
  router
})
