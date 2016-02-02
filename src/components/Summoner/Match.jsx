import React, { Component } from 'react'

import { ChampionAndSpells } from './ChampionAndSpells'
import { KDA } from './KDA'
import { LevelWardsCS } from './LevelWardsCS'
import { Items } from './Items'
import { Trinket } from './Trinket'
import Participants from './Participants'
import classes from 'views/SummonerView/SummonerView.scss'

export default class Match extends Component {
  constructor(props) {
    super(props)
  }

  // Get the participantID of the summoner for this match.
  // This is used to determine which items to display in the summary view.
  getParticipantID(participantIdentitySet) {
    for (let participant of participantIdentitySet) {
      if (participant.summoner.name === this.props.name) {
        return participant.participant_id
      }
    }
  }

  render() {
    const { matchData } = this.props
    const thisParticipant = this.getParticipantID(matchData.participantidentity_set)

    return (
      <div className={classes.match}>
        <div className={classes.matchTitle}>
          {matchData.queue_type}{' '}{matchData.match_creation}
        </div>
        <div className={classes.matchStats}>
          <ChampionAndSpells participantID={thisParticipant} />
          <KDA />
          <LevelWardsCS />
          <Items />
          <Trinket />
          <Participants
            participantSet={matchData.participant_set}
            participantIdentitySet={matchData.participantidentity_set}
          />
        </div>
      </div>
    )
  }
}
