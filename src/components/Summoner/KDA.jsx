import React, { Component, PropTypes } from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export default class KDA extends Component {
  static propTypes = {
    participantData: PropTypes.object
  };

  getKDARatioText() {
    const { kills, deaths, assists } = this.props.participantData
    if (deaths === 0) {
      return <span className={classes.perfectGame}>Perfect KDA</span>
    } else {
      return <span className={classes.kdaText}>{((kills + assists) / deaths).toFixed(2)} KDA</span>
    }
  }

  render() {
    const { kills, deaths, assists } = this.props.participantData

    return (
      <div className={classes.kdaSection}>
        <div className={classes.kda}>
          <span className={classes.kills}>{kills}</span>
          {' / '}
          <span className={classes.deaths}>{deaths}</span>
          {' / '}
          <span className={classes.assists}>{assists}</span>
        </div>
        <div className={classes.kdaRatio}>
          {this.getKDARatioText()}
        </div>
      </div>
    )
  }
}
