import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <div class="container-fluid">

        <div class="row">
          <div class="col-sm-12">
            <Link to="/overview">Overview</Link>
            {' | '}
            <Link to="/stats">Stats</Link>
            {' | '}
            <Link to="/about">About</Link>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <h2>LoL Stats 2</h2>
          </div>
        </div>

        {this.props.children}

        <div class="row">
          <div class="col-sm-12">
            Footer
          </div>
        </div>

      </div>
    )
  }
}
