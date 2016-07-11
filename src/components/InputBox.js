import React from 'react';

var languageCodes = {
  'af': 'Afrikaans',
  'am': 'Amharic',
  'bg': 'Bulgarian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'et': 'Estonian',
  'fil': 'Filipino',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'id': 'Indonesian',
  'in': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'lv': 'Latvian',
  'lt': 'Lithuanian',
  'ms': 'Malay',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'sl': 'Slovenian',
  'es': 'Spanish',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'th': 'Thai',
  'tr': 'Turkish',
  'uk': 'Ukranian',
  'zu': 'Zulu'
}

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: null,
      languageID: null
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    let sourceText = encodeURI(this.state.inputText);
    var source = 'https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyACJqo1v66r9BgpWZxHMoaRrUoFGYJABik&q=' + sourceText;
    var that = this;
      $.ajax ({
        dataType: 'json',
        url: source,
        success: function(data){
          var id = data.data.detections[0][0].language;
          that.setState({ languageID: id })
        }
      });
  }

  onChange() {
    let updatedText = $('.text-box')[0].value;
    if (updatedText == "") {
      this.setState({ inputText: null })
    } else {
      this.setState({ inputText: updatedText });
    }
  }

  render() {
    var lID = this.state.languageID;
    var language = languageCodes[lID];
    var sentence = "";

    if (language) {
      sentence = "This is " + language;
    };
    return (
      <div>
        <input className="text-box" type="text" onChange={this.onChange}></input>
        <h4>{sentence}</h4>
      </div>
    );
  }

}

export default InputBox;
