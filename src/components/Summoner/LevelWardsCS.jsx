import React from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export const LevelWardsCS = ({match}) => (
  <div className={classes.lvlCsWards}>
    <div className={classes.level}>
      Level 16
    </div>
    <div className={classes.cs}>
      102 (2.7) CS
    </div>
    <div className={classes.wards}>
      Bought 3 wards
    </div>
    <div className={classes.killParticipation}>
      41% Kill Participation
    </div>
  </div>
)
