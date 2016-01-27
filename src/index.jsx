import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import StatsContainer from './containers/StatsApp';
import { OverviewContainer } from './containers/Overview';
import { App } from './containers/App';
import { roleFilter, nameFilter, championSort, champions } from './reducers';

const sampleData = require('./data.json');

const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer,
  roleFilter,
  nameFilter,
  championSort,
  champions
}));

// Sync dispatched route action to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, {
  champions: sampleData,
  championSort: {key: 'name', desc: true}
});

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="overview" component={OverviewContainer} />
        <Route path="stats" component={StatsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
);

// Test update logic

//import { setRoleFilter, addChampions, RoleFilters } from './actions';
//
//console.log('INITIAL STATE:');
//console.log(store.getState());
//
//// Every time the state changes, log it
//let unsubscribe = store.subscribe(() =>
//  console.log(store.getState())
//);
//
//// Dispatch some actions
//store.dispatch(setRoleFilter(RoleFilters.SHOW_ADC));
//store.dispatch(addChampions(sampleData));
//store.dispatch(setRoleFilter(RoleFilters.SHOW_TOP));
//store.dispatch(addChampions([{'name': 'Annie'}, {'name': 'Aatrox'}]));
//
//unsubscribe();