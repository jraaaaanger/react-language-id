import React from 'react';

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
      updatedText = null;
    } else {
    this.setState({ inputText: updatedText });
    }
  }

  render() {
    return (
      <div>
        <input className="text-box" type="text" onChange={this.onChange}></input>
        <h4>{this.state.languageID}</h4>
      </div>
    );
  }

}

export default InputBox;
