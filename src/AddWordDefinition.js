import React, { Component } from 'react';
import uniqid from "uniqid";

class AddWordDefinition extends Component {
  addAWord(inputText){
      const newList = this.props.listOfWords;
      newList.push({
        title: inputText.split(' ')[0],
        value: inputText,
        showDefinition: false,
        id: uniqid(),
      });
      return this.props.changeList(newList);
    }


  render() {
    return (
      <button className="btn btn-primary" id="button-addon2" onClick={() => this.addAWord(this.props.inputText)}>Add a word</button>
    );
  }
}

export default AddWordDefinition;
