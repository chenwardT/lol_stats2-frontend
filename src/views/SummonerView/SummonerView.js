import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './SummonerView.scss'

import { Header } from 'components/Summoner/Header'
import { Match } from 'components/Summoner/Match'

export class SummonerContainer extends Component {
  render() {
    return (
      <div className='summoner-view-container container-fluid'>
        <div className='row'>
          <Header header={{summonerName: 'Ronfar'}} />
        </div>
        <div className='row'>
          <div className={'col-sm-12 ' + classes.matchList}>
            {Array.from(Array(10).keys()).map(() => (
              <Match />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

/*
 * Selectors
 */

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(SummonerContainer)
