import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'
import SearchBox from 'components/SearchBox'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Stateless Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of its props, so we can
// define it with a plain javascript function...
function CoreLayout ({ push, children }) {
  return (
    <div className='page-container'>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          {/* Brand and toggle get grouped for better mobile display */}
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand brand' href='#'>Snaptrap</a>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/summoners'>Summoners</Link></li>
              <li><Link to='/champion-table'>Champions</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'>Social Media</a></li>
            </ul>
            <SearchBox push={push} />
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>

      <div className='row'>
        <div className='header-container col-sm-12'>
          <div className='title-and-search-container'>
            <span className='title'>Snaptrap</span>
          </div>
          <div className='patch-status text-center'>
            <span className='patch-status-txt'>Patch</span>{' '}
            <span className='patch-status-num'>6.1</span>{' | '}
            <span className='patch-status-txt'>Champions Analyzed</span>{' '}
            <span className='patch-status-num'>2,134,459 </span>{' | '}
            <span className='patch-status-txt'>Matches Aggregated</span>{' '}
            <span className='patch-status-num'>311,293</span>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='view-container col-sm-12'>
          <button onClick={() => push('/champion-table')}>Go to champ table</button>
          {children}
        </div>
      </div>
    </div>
)
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default connect(
  null,
  routeActions
)(CoreLayout)
