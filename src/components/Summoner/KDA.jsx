import React from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export const KDA = ({match}) => (
  <div className={classes.kdaSection}>
    <div className={classes.kda}>
      <span className={classes.kills}>5</span>
      {' / '}
      <span className={classes.deaths}>2</span>
      {' / '}
      <span className={classes.assists}>7</span>
    </div>
    <div className={classes.kdaRatio}>
      1.58:1 KDA
    </div>
  </div>
)
