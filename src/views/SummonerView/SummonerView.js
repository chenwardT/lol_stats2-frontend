import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './SummonerView.scss'

import { actions as summonerActions } from 'redux/modules/summoner'
import { Header } from 'components/Summoner/Header'
import Match from 'components/Summoner/Match'

export class SummonerContainer extends Component {
  static propTypes = {
    params: PropTypes.object,
    setMatches: PropTypes.func,
    matches: PropTypes.any
  };

  componentWillMount() {
    // We'll have no matches if the user navigated directly to a summoner detail
    // page, so we get the data here instead of upon navigation from SearchBox's
    // route push.
    if (this.props.matches === 'loading') {
      const { region, name } = this.props.params
      console.log(`SummonerView: Send request: ${region}, ${name}`)

      fetch('http://laguz:8001/get_pk/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'region': region,
          'name': name
        })
      })
        .then((resp) => resp.json())
        .then((json) => {
          console.log(`SummonerView: Got canonical name: [${json.region}] ${json.name}`)
          return json
        })
        .then((json) => {
          console.log('SummonerView: Getting summoner-matches by PK')
          fetch(`http://laguz:8001/summoner-matches/${json.id}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then((resp) => resp.json())
            .then((json) => {
              console.log(`SummonerView: Got ${json.results.length} results`)
              this.props.setMatches({results: json.results})
            })
        })
    }
  }

  getContentOrLoadingMsg() {
    // TODO: Improve: Indicator? Re-sending of request if it errors out?
    if (this.props.matches === 'loading' || typeof this.props.matches === 'undefined') {
      return (
        <span className={classes.loadingText}>Loading...</span>
      )
    } else {
      return (this.props.matches.map((matchData) => (
        <Match
          matchData={matchData}
          name={this.props.params.name}
          key={matchData.match_id}
          champions={this.props.champions}
          spells={this.props.spells}
          items={this.props.items}
        />
      )))
    }
  }

  render() {
    return (
      <div className='summoner-view-container container-fluid'>
        <div className='row'>
          <Header header={{summonerName: this.props.params.name}} />
        </div>
        <div className='row'>
          <div className={'col-sm-12 ' + classes.matchList}>
            {this.getContentOrLoadingMsg()}
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
  matches: state.summoner.matches,
  champions: state.core.champions,
  spells: state.core.spells,
  items: state.core.items
})

export default connect(mapStateToProps, summonerActions)(SummonerContainer)
