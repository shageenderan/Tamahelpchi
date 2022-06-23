import {Component} from 'react'

import './DigitalTimer.css'

class DigitalTimer extends Component {
  getElapsedSecondsInTimeFormat = (current_minutes, current_seconds) => {
    const minutes = current_minutes
    const seconds = Math.floor(current_seconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const labelText = this.props.playing ? 'Running' : 'Paused'
    console.log(this.props.minutes, this.props.seconds)
    return (
      <div>
        <div className="digital-timer-container">
          <div className="timer-display-container">
            <div onClick={this.props.onClick} className="elapsed-time-container">
              <h1 className="elapsed-time">
                {this.getElapsedSecondsInTimeFormat(this.props.minutes, this.props.seconds)}
              </h1>
              <p className="timer-state">{labelText}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer