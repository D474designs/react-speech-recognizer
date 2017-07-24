import React, { Component } from 'react'
import SpeechRecognizer from 'components/speechRecognizer'
import WordDetector from 'components/wordDetector'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tab: 0
    }
  }

  changeTab(index) {
    this.setState({
      tab: index
    })
  }

  render() {
    const { tab } = this.state

    const tabContent = (tab === 0)
      ? (
        <div>
          <h1> Speech recognition </h1>
          <SpeechTest />
        </div>
      ):(
        <div>
          <h1> Word detection </h1>
          <WordsList />
        </div>
      )

    return (
      <div>
        <button onClick={() => this.changeTab(0)}>Speech recognition</button>
        <button onClick={() => this.changeTab(1)}>Word detection</button>
        {tabContent}
      </div>
    )
  }
}

const Step = ({word, onSuccess, onFailure}) =>
  <div>
    <p>Say <strong>{word}</strong> to go to next step</p>
    <WordDetector onNotAvailable={() => alert('not available in your browser')} word={word} onSuccess={onSuccess} onFailure={onFailure} />
  </div>

const LastStep = () => <div> Well done ! </div>

class WordsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWord: 0,
      attempts: 0
    }
    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)
    this.words = [
      'piece of cake',
      'star',
      'how are you',
      'gymnasium'
    ]
  }
  onSuccess(res, attempts) {
    console.log("onSuccess", res, attempts)
    const { currentWord } = this.state
    this.setState({
      currentWord: currentWord + 1,
      attempts: 0
    })
  }
  onFailure(res, attempts) {
    console.log("onFailure", res, attempts)
    this.setState({
      attempts
    })
  }
  render() {
    const { step, currentWord, attempts } = this.state
    const word = this.words[currentWord]
    return word
      ? (
        <div>
          <Step word={word} onSuccess={this.onSuccess} onFailure={this.onFailure} />
          <p> Attempts: {attempts} </p>
        </div>
      ): <LastStep />
  }
}

class SpeechTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastWord: ''
    }
    this.saveWord = this.saveWord.bind(this)
  }

  saveWord(word) {
    console.log("onResult", word)
    this.setState({
      lastWord: word
    })
  }

  render() {
    const { lastWord: { confidence = '' , transcript = ''}} = this.state
    const content = transcript
      ? <div>
        <p>
          You said: "{transcript}"
        </p>
        <p>
          Confidence: {confidence * 100} %
        </p>
      </div>
      : <div>
        Speak into your microphone, the result will be displayed when you stop speaking
      </div>

    return (
      <div>
        <SpeechRecognizer onNotAvailable={() => alert('not available in your browser')} onResult={this.saveWord} onTempResult={(res) => console.log("onTempResult", res)}
          onError={(error) => console.log("error", error)}
        />
        {content}
      </div>
    )
  }
}

export default App
