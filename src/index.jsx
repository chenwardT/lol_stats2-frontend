import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, Link, browserHistory, IndexRoute, Redirect } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import StatsContainer from './containers/StatsApp';
import statsApp from './reducers';

const sampleData = require('./data.json');

// For now, init the store with the sample JSON data.
// Later, get this from our REST API, e.g. /champion-stats/6.1
let store = createStore(statsApp, {champions: sampleData, championSort: {key: 'name', desc: false}});

render(
  <Provider store={store}>
    <StatsContainer championStats={sampleData} />
  </Provider>,
  document.getElementById('stats-container')
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