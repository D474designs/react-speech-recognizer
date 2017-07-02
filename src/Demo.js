import React from 'react'
import SpeechRecognizer from 'components/speechRecognizer'

const App = () =>
  <div>
    Speech recognizer:
    <SpeechRecognizer onResult={(res) => console.log("res", res)} onTempResult={(res) => console.log("temp res", res)}
      onError={(error) => console.log("error", error)}
    />
  </div>

export default App
