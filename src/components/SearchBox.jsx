import React, { Component } from 'react'

export default class SearchBox extends Component {
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
        console.log(`/${json.region}/${json.name}`)
        this.props.push(`/summoner/${json.region}/${json.name}`)
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
