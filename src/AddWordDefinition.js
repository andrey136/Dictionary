import React, { Component } from 'react';
import uniqid from "uniqid";
import axios from "axios";

class AddWordDefinition extends Component {
  addAWord(inputText){
    if(inputText !== ''){
      const newList = this.props.listOfWords;
      const item = {
        title: inputText.split(' ')[0],
        value: inputText,
        showDefinition: false,
        id: uniqid(),
      };
      axios.post('http://localhost:5000/', item)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      newList.push(item);
      this.props.cleanInput();
      return this.props.changeList(newList);
    }
  }


  render() {
    return (
      <button className="btn btn-primary" id="button-addon2" onClick={() => this.addAWord(this.props.inputText)}>Add a word</button>
    );
  }
}

export default AddWordDefinition;
