import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { actions as summonerActions } from 'redux/modules/summoner'

export class SearchBox extends Component {
  static propTypes = {
    push: PropTypes.func
  };

  sendRequest(region, name) {
    console.log(`Send request: ${region}, ${name}`)

    const fetchInit = {
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

    fetch('http://laguz:8001/get_pk/', fetchInit)
      .then((resp) => resp.json())
      .then((json) => {
        console.log(`Got canonical name: [${json.region}] ${json.name}`)
        this.props.clearMatches()
        this.props.push(`/summoner/${json.region}/${json.name}`)
        return json
      })
      .then((json) => {
        // Then use the PK to query the summoner data
        console.log('Getting summoner-matches by PK')
        fetch(`http://laguz:8001/summoner-matches/${json.id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then((resp) => resp.json())
          .then((json) => {
            console.log(`Got ${json.results.length} results`)
            this.props.setMatches({results: json.results})
          })
      })
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.sendRequest(this.refs.region.value, this.refs.name.value)
    }
  }

  render() {
    return (
      <form className='navbar-form navbar-left' role='search'>
        <div className='form-group'>
          <select ref='region' id='search-region' className='selectpicker' data-width='auto'>
            <option value='NA'>NA</option>
            <option value='EUW'>EUW</option>
            <option value='EUNE'>EUNE</option>
            <option value='BR'>BR</option>
            <option value='KR'>KR</option>
            <option value='TR'>TR</option>
            <option value='RU'>RU</option>
            <option value='LAN'>LAN</option>
            <option value='LAS'>LAS</option>
            <option value='OCE'>OCE</option>
          </select>
          <input
            ref='name'
            type='text'
            id='summoner-champion-search'
            className='form-control'
            placeholder='Summoner or Champion'
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <button className='btn btn-default'><span className='glyphicon glyphicon-search'/></button>
        </div>
      </form>
    )
  }
}

export default connect(null, summonerActions)(SearchBox)
