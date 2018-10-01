import React, { Component } from 'react';

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
              <button className="btn btn-primary" id="button-addon2" onClick={() => this.props.addAWord(this.state.inputText)}>Add a word</button>
            </div>
        </div>
      </div>
    );
  }
}

export default Input;
