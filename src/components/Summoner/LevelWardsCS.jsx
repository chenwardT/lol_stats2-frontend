import React, { Component } from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export default class LevelWardsCS extends Component {
  render() {
    const totalMinionsKilled = this.props.participantData.minions_killed +
      this.props.participantData.neutral_minions_killed
    const { killParticipation, participantData, matchDuration } = this.props

    return (
      <div className={classes.lvlCsWards}>
        <div className={classes.level}>
          Level {participantData.champ_level}
        </div>
        <div className={classes.cs}>
          {totalMinionsKilled + ' (' + (totalMinionsKilled / (matchDuration / 60)).toFixed(1) + ') CS'}
        </div>
        <div className={classes.wards}>
          Bought {participantData.vision_wards_bought_in_game} wards
        </div>
        <div className={classes.killParticipation}>
          {(killParticipation * 100).toFixed(0)}% Kill Participation
        </div>
      </div>
    )
  }
}
