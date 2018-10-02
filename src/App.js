import React, { Component } from 'react';
import Header from './Header';
import TableForWords from "./Vocabulary/TableForWords";
import uniqid from "uniqid";

class App extends Component {
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

  addAWord(newList){
    this.setState({
      list: newList,
    });
    console.log(this.state.list);
  }

  render() {
    return (
      <div >
        <Header addAWord={(arg) => this.addAWord(arg)} listOfWords={this.state.list}/>
        <TableForWords listOfWords={this.state.list} chageProps={(arg) => this.addAWord(arg)}/>
      </div>
    );
  }
}

export default App;
