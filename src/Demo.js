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

const Step = ({word, onSuccess, onFailure}) =>
  <div>
    <p>Say {word} to go to next step</p>
    <WordDetector word={word} onSuccess={onSuccess} onFailure={onFailure} />
  </div>

const LastStep = () => <div> SUCCESS </div>

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWord: 0
    }
    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)
    this.words = [
      'piece of cake',
      'sun',
      'star',
      'gymnasium'
    ]
  }
  onSuccess(res, attempts) {
    console.log("onSuccess", res, attempts)
    const { currentWord } = this.state
    this.setState({
      currentWord: currentWord + 1
    })
  }
  onFailure(res, attempts) {
    console.log("onFailure", res, attempts)
  }
  render() {
    const { step, currentWord } = this.state
    const word = this.words[currentWord]
    return word
      ? <Step word={word} onSuccess={this.onSuccess} onFailure={this.onFailure} />
      : <LastStep />
  }
}

export default App
