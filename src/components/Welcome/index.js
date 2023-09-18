import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: true}

  renderFunc = () => {
    this.setState(previousState => ({
      text: !previousState.text,
    }))
  }

  render() {
    const {text} = this.state
    const buttonText = text ? 'subscribe' : 'subscribed'
    return (
      <div className="bg-con">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! happy Learning</p>
        <button onClick={this.renderFunc} type="button" className="but">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
