import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNum: 0,
  }

  getRandomNum = () => {
    this.setState({randomNum: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="bg-container">
        <div className="random-num-card">
          <h1 className="heading-ele">Random Number</h1>
          <p className="para-ele">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button-ele"
            onClick={this.getRandomNum}
          >
            Generate
          </button>
          <p className="num-ele">{randomNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
