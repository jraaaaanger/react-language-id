import React from 'react';


var languageCodes = {
  'af': 'Afrikaans',
  'am': 'Amharic',
  'hy': 'Armenian',
  'bn': 'Bengali',
  'bg': 'Bulgarian',
  'ca': 'Catalan',
  'co': 'Corsican',
  'zh-CN': 'Chinese',
  'zh-TW': 'Chinese (Taiwan)',
  'zh-HK': 'Chinese (Hong Kong)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'et': 'Estonian',
  'eu': 'Basque',
  'fa': 'Farsi',
  'fil': 'Filipino',
  'fi': 'Finnish',
  'fy': 'Frisian',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'eo': 'Esperanto',
  'ga': 'Irish Gaelic',
  'gl': 'Galician',
  'haw': 'Hawaiian',
  'hi': 'Hindi',
  'hmn': 'Hmong',
  'ht': 'Haitian Creole',
  'hu': 'Hungarian',
  'id': 'Indonesian',
  'ig': 'Igbo',
  'in': 'Indonesian',
  'is': 'Icelandic',
  'it': 'Italian',
  'ja': 'Japanese',
  'ka': 'Georgian',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'lt': 'Lithuanian',
  'mi': 'Maori',
  'ms': 'Malay',
  'mt': 'Maltese',
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
  'tg': 'Tajik',
  'th': 'Thai',
  'tr': 'Turkish',
  'uk': 'Ukranian',
  'vi': 'Vietnamese',
  'cy': 'Welsh',
  'xh': 'Xhosa',
  'yi': 'Yiddish',
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
    var source = 'https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyBZ-KF0lmBtrlhvn2jJT6SqXyeLubXlelQ&q=' + sourceText;
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
    if (updatedText == "" || updatedText == " " || updatedText == null) {
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
      sentence = "This is ";
    };
    return (
      <div>
        <textarea className="text-box" type="text" onChange={this.onChange}></textarea>
        <h4>{sentence}<span className='color'>{language}</span></h4>
      </div>
    );
  }

}

export default InputBox;
