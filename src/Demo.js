import React from 'react'
import SpeechRecognizer from 'components/speechRecognizer'
import WordDetector from 'components/wordDetector'

const App = () =>
  <div>
    Speech recognizer:
    {/*<SpeechRecognizer onResult={(res) => console.log("res", res)} onTempResult={(res) => console.log("temp res", res)}
      onError={(error) => console.log("error", error)}
    />*/}
    <WordDetector word='OK' onSuccess={(res, attempts) => {
      console.log("success", res, attempts)
    }} onFailure={(res, attempts) => {
      console.log("failure", res, attempts)
    }} />
  </div>

export default App
