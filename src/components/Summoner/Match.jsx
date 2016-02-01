import React from 'react'

import { ChampionAndSpells } from './ChampionAndSpells'
import { KDA } from './KDA'
import { LevelWardsCS } from './LevelWardsCS'
import { Items } from './Items'
import { Trinket } from './Trinket'
import { Participants } from './Participants'
import classes from 'views/SummonerView/SummonerView.scss'

export const Match = ({match}) => (
  <div className={classes.match}>
    <div className={classes.matchTitle}>
      Ranked - 18 hours ago
    </div>
    <div className={classes.matchStats}>
      <ChampionAndSpells />
      <KDA />
      <LevelWardsCS />
      <Items />
      <Trinket />
      <Participants />
    </div>
  </div>
)
