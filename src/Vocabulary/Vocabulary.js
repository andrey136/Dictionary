import React, { Component } from 'react';
import uniqid from "uniqid";
import BodyOfTable from "./BodyOfTable";

class Vocabulary extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: [
        {
          title: 'Dip',
          value: 'Dip is to plunge (something, as a cloth or sponge) temporarily into ' +
          'a liquid to moisten it, dye it, or cause it to take up some of lhe liquid',
          showDefinition: false,
          id: uniqid(),
        },
        {
          title: 'Apron',
          value: "Apron is a garment covering part of the front of the body and tied the" +
          " waist, for protecting the wearer's clothing",
          showDefinition: false,
          id: uniqid(),
        }
      ]
    }
  }

  addAWord(){
    console.log('ddddddddd');
    if (this.props.newWord !== ''){
      const newList = [...this.state.list];
      newList.push({
        title: this.props.newWord.split(' ')[0],
        value: this.props.newWord,
        showDefinition: false,
        id: uniqid(),
      });
      this.props.changeProps();
      this.setState({
        list:newList,
        newWord: '',
      });
    }
  }

  changeListOfWords(newList){
    this.setState({
      list: newList,
    });
  }

  render() {
    console.log(this.newWord);
    if(this.props.newWord !== '')this.addAWord();
    return (
        <BodyOfTable changeListOfWords={(arg) => this.changeListOfWords(arg)} listOfWords={this.state.list}/>
    );
  }
}

export default Vocabulary;
