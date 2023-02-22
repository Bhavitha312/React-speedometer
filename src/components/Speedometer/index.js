import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h2 className="sub">
          Speed is <span className="spe">{count}</span>mph
        </h2>
        <p className="para">min limit is 0mph, max limit is 200mph</p>
        <div>
          <button type="button" onClick={this.onIncrement} className="btn">
            Accelerate
          </button>
          <button type="button" onClick={this.onDecrement} className="btn">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
