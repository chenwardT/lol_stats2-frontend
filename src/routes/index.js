import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import SummonerView from 'views/SummonerView/SummonerView'
import NotFoundView from 'views/NotFoundView/NotFoundView'
import ChampionTableView from 'views/ChampionTableView/ChampionTableView'
import AboutView from 'views/AboutView/AboutView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/summoners' component={SummonerView}>
      <Route path='/summoner/:region/:name' component={SummonerView} />
    </Route>
    <Route path='/champion-table' component={ChampionTableView} />
    <Route path='/about' component={AboutView} />
    <Route path='/404' component={NotFoundView} />
    <Redirect from='*' to='/404' />
  </Route>
)
