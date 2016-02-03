import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import core from './modules/core'
import championTable from './modules/championTable'
import summoner from './modules/summoner'

export default combineReducers({
  core,
  championTable,
  summoner,
  router
})
