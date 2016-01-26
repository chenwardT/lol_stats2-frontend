import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, Redirect } from 'react-router';
import StatsContainer from './components/App';

const sampleData = require('./data.json');

render(
  <StatsContainer championStats={sampleData} />,
  document.getElementById('stats-container')
);