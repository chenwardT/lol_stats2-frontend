import React from 'react'
import classes from 'views/SummonerView/SummonerView.scss'

export const Header = ({header}) => (
  <div className='summoner-header col-sm-12'>
    <span className={classes.summonerName}>{header.summonerName}</span>
    {' '}
    <button className='btn btn-default'>Refresh</button>
    {' '}
    <span className='summoner-subtext'>Last updated: 14 minutes ago</span>
  </div>
)

