import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './SummonerView.scss'

import { actions as summonerActions } from 'redux/modules/summoner'
import { Header } from 'components/Summoner/Header'
import { Match } from 'components/Summoner/Match'

export class SummonerContainer extends Component {
  constructor(props) {
    // First, resolve the region + name to the PK of the summoner on the backend
    super(props)
    const { region, name } = this.props.params
    console.log(region, name)
    
    const fetchPKInit = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'region': region,
        'name': name
      })
    }

    fetch('http://laguz:8001/get_pk/', fetchPKInit)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(`/${json.region}/${json.name}`)
        return json
      })
      .then((json) => {
        // Then use the PK to query the summoner data
        const fetchMatchesInit = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
        fetch(`http://laguz:8001/summoner-matches/${json.id}`, fetchMatchesInit)
          .then((resp) => resp.json())
          .then((json) => {
            console.log(`Got ${json.results.length} results`)
            this.props.setMatches({results: json.results})
          })
      })
  }

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

export default connect(mapStateToProps, summonerActions)(SummonerContainer)
