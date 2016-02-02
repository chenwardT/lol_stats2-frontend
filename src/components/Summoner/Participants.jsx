import React, { Component } from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export default class Participants extends Component {
  render() {
    let { participantSet, participantIdentitySet } = this.props

    // Sort by participant_id
    participantSet = participantSet.sort((a, b) => a.participant_id - b.participant_id)
    participantIdentitySet = participantIdentitySet.sort((a, b) => a.participant_id - b.participant_id)

    return (
      <div className={classes.participants}>
        <div className={classes.team}>
          {participantSet.slice(0, 5).map((ele, idx) => (
            <div className={classes.participant}>
              <div className={classes.participantChampionImage}>
                <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/Lux.png' />
              </div>
              <div className={classes.participantName}>
                {participantIdentitySet[idx].summoner.name}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.team}>
          {participantSet.slice(5).map((ele, idx) => (
          <div className={classes.participant}>
            <div className={classes.participantChampionImage}>
              <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/Lux.png' />
            </div>
            <div className={classes.participantName}>
              {participantIdentitySet[idx + 5].summoner.name}
            </div>
          </div>
            ))}
        </div>
      </div>
    )
  }
}
