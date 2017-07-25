'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _speechRecognizer = require('../speechRecognizer');

var _speechRecognizer2 = _interopRequireDefault(_speechRecognizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultCompare = function defaultCompare(a, b) {
  return a.toLowerCase().trim() === b.toLowerCase().trim();
};

var WordDetector = function (_Component) {
  _inherits(WordDetector, _Component);

  function WordDetector(props) {
    _classCallCheck(this, WordDetector);

    var _this = _possibleConstructorReturn(this, (WordDetector.__proto__ || Object.getPrototypeOf(WordDetector)).call(this, props));

    _this.onResult = _this.onResult.bind(_this);
    _this.state = {
      attempts: 0
    };
    return _this;
  }

  _createClass(WordDetector, [{
    key: 'onResult',
    value: function onResult(_ref) {
      var _ref$transcript = _ref.transcript,
          transcript = _ref$transcript === undefined ? '' : _ref$transcript;
      var attempts = this.state.attempts;
      var _props = this.props,
          word = _props.word,
          _props$onSuccess = _props.onSuccess,
          onSuccess = _props$onSuccess === undefined ? function () {} : _props$onSuccess,
          _props$onFailure = _props.onFailure,
          onFailure = _props$onFailure === undefined ? function () {} : _props$onFailure,
          _props$compare = _props.compare,
          compare = _props$compare === undefined ? defaultCompare : _props$compare;

      var incrementedAttempts = attempts + 1;
      var success = compare(word, transcript);

      this.setState({
        attempts: success ? 0 : incrementedAttempts
      }, function () {
        var cb = success ? onSuccess : onFailure;
        cb(transcript, incrementedAttempts);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$onNotAvailable = this.props.onNotAvailable,
          onNotAvailable = _props$onNotAvailable === undefined ? function () {} : _props$onNotAvailable;

      return _react2.default.createElement(_speechRecognizer2.default, { onNotAvailable: onNotAvailable, onResult: this.onResult });
    }
  }]);

  return WordDetector;
}(_react.Component);

exports.default = WordDetector;