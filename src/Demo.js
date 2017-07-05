import React, { Component } from 'react'
import SpeechRecognizer from 'components/speechRecognizer'
import WordDetector from 'components/wordDetector'

/*
const App = () =>
  <div>
    Speech recognizer:
    <SpeechRecognizer onResult={(res) => console.log("res", res)} onTempResult={(res) => console.log("temp res", res)}
      onError={(error) => console.log("error", error)}
    />
  </div>
*/

const FirstStep = ({onSuccess, onFailure}) =>
  <div>
    <p>Say "hello" to go to next step</p>
    <WordDetector word='hello' onSuccess={onSuccess} onFailure={onFailure} />
  </div>

const LastStep = () => <div> SUCCESS </div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
    }
    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)
  }
  onSuccess(res, attempts) {
    console.log("onSuccess", res, attempts)
    this.setState({
      step: 1
    })
  }
  onFailure(res, attempts) {
    console.log("onFailure", res, attempts)
  }
  render() {
    const { step } = this.state
    return step === 0
      ? <FirstStep onSuccess={this.onSuccess} onFailure={this.onFailure} />
      : <LastStep />
  }
}

export default App
