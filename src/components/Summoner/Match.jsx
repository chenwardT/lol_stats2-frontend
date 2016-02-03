import React, { Component } from 'react'

import { ChampionAndSpells } from './ChampionAndSpells'
import KDA from './KDA'
import LevelWardsCS from './LevelWardsCS'
import { Items } from './Items'
import { Trinket } from './Trinket'
import Participants from './Participants'
import classes from 'views/SummonerView/SummonerView.scss'

export default class Match extends Component {
  // Get the participantID of the queried summoner for this match.
  // Used to populate children.
  getParticipantID(participantIdentitySet) {
    for (let participant of participantIdentitySet) {
      if (participant.summoner.name === this.props.name) {
        return participant.participant_id
      }
    }
    console.error('Summoner not found in this participantIdentitySet!')
  }

  // Get the element of the participant_set that corresponds to the
  // queried summoner. Used to populate children.
  getParticipantData(participantSet, id) {
    for (let participantData of participantSet) {
      if (participantData.participant_id === id) {
        return participantData
      }
    }
  }

  // Accepts the participant_set and the participant ID of a member of
  // the team whose kills will be summed and returned.
  getTotalKills(participant_set, id) {
    // First get the team ID of the participant in question.
    let teamId
    for (let participant of participant_set) {
      if (participant.participant_id === id) {
        teamId = participant.team_id
      }
    }

    return participant_set.filter(p => p.team_id === teamId)
                          .reduce((prev, curr) => (prev + curr.kills), 0)
  }

  render() {
    const { matchData } = this.props
    const participantIDOfQueried = this.getParticipantID(matchData.participantidentity_set)
    const participantDataOfQueried = this.getParticipantData(matchData.participant_set,
                                                             participantIDOfQueried)
    const totalKillsOfTeamOfQueried = this.getTotalKills(matchData.participant_set,
                                                         participantIDOfQueried)
    const killParticipation = (participantDataOfQueried.kills + participantDataOfQueried.assists) /
                              totalKillsOfTeamOfQueried

    return (
      <div className={classes.match}>
        <div className={classes.matchTitle}>
          {matchData.queue_type}{' '}{matchData.match_creation}
        </div>
        <div className={classes.matchStats}>
          <ChampionAndSpells participantData={participantDataOfQueried} />
          <KDA participantData={participantDataOfQueried} />
          <LevelWardsCS
            participantData={participantDataOfQueried}
            matchDuration={matchData.match_duration}
            killParticipation={killParticipation}
          />
          <Items participantData={participantDataOfQueried} />
          <Trinket participantData={participantDataOfQueried} />
          <Participants
            participantSet={matchData.participant_set}
            participantIdentitySet={matchData.participantidentity_set}
          />
        </div>
      </div>
    )
  }
}
