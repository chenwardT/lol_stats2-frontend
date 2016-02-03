import React, { Component } from 'react'

export default class AboutView extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Where does your data come from?</h3>
        <p>
          We get match data for the following regions:
          <ul>
            <li>North America</li>
            <li>Europe West</li>
            <li>Europe Nordic East</li>
            <li>Korea</li>
            <li>Brazil</li>
            <li>Latin America North</li>
            <li>Latin America South</li>
            <li>Oceania</li>
            <li>Turkey</li>
            <li>Russia</li>
          </ul>
          This data is made available by Riot via their official API.
        </p>
        <h3>What advantage does Snaptrap have over other sites?</h3>
        <p>
          We collect data from all query-able regions, across a wider
          variety of skill-levels and provide a more in-depth analysis of the
          game's landscape than any other site.
          We don't have any lower-bound on what skill level we expect our users
          to be, so we don't filter our data collection by league. Instead,
          we make everything available, and let you apply the filters yourself.

          Interested in what you can successfully get away with in Silver? No
          problem! Only want to see trends from Diamond or higher? We got you.
        </p>
      </div>
    )
  }
}
