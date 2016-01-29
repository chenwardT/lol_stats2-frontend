import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import classes from './SummoerView.scss'

export class SummonerContainer extends Component {
  render() {
    return (
      <div className='summoner-view-container container-fluid'>
        <div className='row'>
          <div className='summoner-header col-sm-12'>
            <h4>Summoner Name</h4>
            <button className='btn btn-default'>Refresh</button>
            <span className='summoner-subtext'>Last updated: 14 minutes ago</span>
          </div>
        </div>
        <div className='row'>
          <div className={'col-sm-12 ' + classes.matchList}>
            {Array.from(Array(10).keys()).map(() => {
              return (
                <div className={classes.match}>
                  <div className={classes.matchTitle}>
                    Ranked - 18 hours ago
                  </div>
                  <div className={classes.matchStats}>
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
                    <div className={classes.items}>
                      {Array.from(Array(6).keys()).map(() => (
                        <div className={classes.item}>
                          <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/item/1001.png' />
                        </div>
                      ))}
                    </div>
                    <div className={classes.trinket}>
                      <img src='http://ddragon.leagueoflegends.com/cdn/6.2.1/img/item/3341.png' />
                    </div>
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
                  </div>
                </div>
              )})
            }
          </div>
        </div>
      </div>
    )
  }
}

/*
 * Selectors
 */


const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(SummonerContainer)
