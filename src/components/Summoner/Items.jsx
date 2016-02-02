import React from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export const Items = ({match}) => (
  <div className={classes.items}>
    {Array.from(Array(6).keys()).map((_, idx) => (
    <div key={idx} className={classes.item}>
      <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/item/1001.png' />
    </div>
      ))}
  </div>
)
