// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImage: HEADS_IMG_URL, HeadCount: 0, TailsCount: 0}

  TossResult = () => {
    const {HeadCount, TailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    let resultImage = ''
    let totalHeadcount = HeadCount
    let totalTailcount = TailsCount

    if (toss === 0) {
      resultImage = HEADS_IMG_URL
      totalHeadcount += 1
    } else {
      resultImage = TAILS_IMG_URL
      totalTailcount += 1
    }
    this.setState({
      tossImage: resultImage,
      HeadCount: totalHeadcount,
      TailsCount: totalTailcount,
    })
  }

  render() {
    const {tossImage, HeadCount, TailsCount} = this.state
    const Totalcount = HeadCount + TailsCount
    return (
      <div className="app_container">
        <div className="coin_container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.TossResult}>
            Toss Game
          </button>
          <div className="score_container">
            <p className="score_description">Total:{Totalcount}</p>
            <p className="score_description">Heads:{HeadCount}</p>
            <p className="score_description">Tails:{TailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
