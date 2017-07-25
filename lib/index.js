'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _speechRecognizer = require('./components/speechRecognizer');

Object.defineProperty(exports, 'SpeechRecognizer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_speechRecognizer).default;
  }
});
Object.defineProperty(exports, 'speechRecognitionAvailable', {
  enumerable: true,
  get: function get() {
    return _speechRecognizer.speechRecognitionAvailable;
  }
});

var _wordDetector = require('./components/wordDetector');

Object.defineProperty(exports, 'WordDetector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wordDetector).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }