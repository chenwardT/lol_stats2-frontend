import React, { Component, PropTypes } from 'react'

import classes from 'views/SummonerView/SummonerView.scss'

export default class Items extends Component {
  static propTypes = {
    participantData: PropTypes.object.isRequired
  };

  render() {
    const { participantData } = this.props
    const item_ids = [participantData.item0, participantData.item1,
                      participantData.item2, participantData.item3,
                      participantData.item4, participantData.item5]
    return (
      <div className={classes.items}>
        {item_ids.filter(item => item !== 0).map((item, idx) => (
          <div key={idx} className={classes.item}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/6.2.1/img/item/${item}.png`}/>
          </div>
        ))}
      </div>
    )
  }
}
