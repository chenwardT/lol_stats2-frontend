import React from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export const ChampionAndSpells = ({match}) => (
  <div className={classes.championAndSpells}>
    <div className={classes.championImage}>
      <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/Lux.png' />
    </div>
    <div className={classes.spells}>
      <div className={classes.spell}>
        <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/spell/SummonerFlash.png' />
      </div>
      <div className={classes.spell}>
        <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/spell/SummonerFlash.png' />
      </div>
    </div>
    <div className={classes.championName}>
      Lux
    </div>
  </div>
)
