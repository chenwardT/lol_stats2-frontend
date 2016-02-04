import React, { Component, PropTypes } from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export default class ChampionAndSpells extends Component {
  render() {
    const {participantData, champions, spells} = this.props
    const champion = champions.filter((champ) =>
                         champ.champion_id === participantData.champion_id)[0]
    const spell1 = spells.filter((spell) =>
                       spell.spell_id === participantData.spell1_id)[0]
    const spell2 = spells.filter((spell) =>
                       spell.spell_id === participantData.spell2_id)[0]

    return (
      <div className={classes.championAndSpells}>
        <div className={classes.championImage}>
          <img src={`http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/${champion.key}.png`} />
        </div>
        <div className={classes.spells}>
          <div className={classes.spell}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/6.2.1/img/spell/${spell1.key}.png`} />
          </div>
          <div className={classes.spell}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/6.2.1/img/spell/${spell2.key}.png`} />
          </div>
        </div>
        <div className={classes.championName}>
          {champion.name}
        </div>
      </div>
    )
  }
}
