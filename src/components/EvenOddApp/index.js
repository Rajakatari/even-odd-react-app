// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {count} = this.state
    const numberType =
      count % 2 === 0 ? <p>Count is Even</p> : <p>Count is Odd</p>

    return (
      <div className="bg-container">
        <div className="inner-card-container">
          <h1>
            Count <span>{count}</span>
          </h1>
          {numberType}
          <div>
            <button type="button" className="button" onClick={this.onIncrement}>
              Increment
            </button>
          </div>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
