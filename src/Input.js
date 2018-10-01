import React, { Component } from 'react';
import AddWordDefinition from './AddWordDefinition';

class Input extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputText: '',
    }
  }

  changeInput(value){
    this.setState({
      inputText: value,
      })
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input className="form-control"
                 placeholder="Enter the word"
                 value={this.state.inputText}
                 onChange={(e) => this.changeInput(e.target.value)} />
            <div className="input-group-append">
              <AddWordDefinition inputText={this.state.inputText} changeList={(arg) => this.props.changeListOfWords(arg)} listOfWords={this.props.listOfWords} />
            </div>
        </div>
      </div>
    );
  }
}

export default Input;
