import React, {Component} from 'react';
import AddWordDefinition from './AddWordDefinition';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      disabled: false,
    }
  }

  cleanInput() {
    this.setState({
      inputText: '',
    });
  }

  changeList(newList) {
    return this.props.changeListOfWords(newList)
  }

  changeInput(value) {
    this.setState({
      inputText: value,
    })
  }

  showResponse(list) {
    const newList = this.props.listOfWords;
    return this.props.changeListOfWords(newList.concat(list));
  }

  load = () => {
    axios.get('http://localhost:5000/').then(res => this.showResponse(res.data));
    this.setState({
      disabled: true,
    });
  };

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input className="form-control"
                 placeholder="Enter the word"
                 value={this.state.inputText}
                 onChange={(e) => this.changeInput(e.target.value)}/>
          <div className="input-group-append">
            <AddWordDefinition inputText={this.state.inputText} changeList={(arg) => this.props.changeListOfWords(arg)}
                               listOfWords={this.props.listOfWords} cleanInput={() => this.cleanInput()}/>
            <button onClick={this.load} className="btn btn-primary" disabled={this.state.disabled}>Load</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
