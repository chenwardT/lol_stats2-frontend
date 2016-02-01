import React from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export const Participants = ({match}) => (
  <div className={classes.participants}>
    <div className={classes.team}>
      {Array.from(Array(5).keys()).map(() => (
        <div className={classes.participant}>
          <div className={classes.participantChampionImage}>
            <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/Lux.png' />
          </div>
          <div className={classes.participantName}>
            Ronfar
          </div>
        </div>
      ))}
    </div>
    <div className={classes.team}>
      {Array.from(Array(5).keys()).map(() => (
      <div className={classes.participant}>
        <div className={classes.participantChampionImage}>
          <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/Lux.png' />
        </div>
        <div className={classes.participantName}>
          Ronfar
        </div>
      </div>
        ))}
    </div>
  </div>
)
