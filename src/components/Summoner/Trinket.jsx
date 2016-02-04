import React from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export const Trinket = ({participantData}) => (
  <div className={classes.trinket}>
    <img src={`http://ddragon.leagueoflegends.com/cdn/6.2.1/img/item/${participantData.item6}.png`} />
  </div>
)
