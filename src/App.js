import React, { Component } from 'react';
import Header from './Header';
import TableForWords from "./Vocabulary/TableForWords";
import Input from "./Input";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      list: [],
    };
  }

  changeListOfWords(newList){
    this.setState({
      list: newList,
    });
    console.log(this.state.list);
  }

  render() {
    return (
      <div className="container" >
        <Header addAWord={(arg) => this.addAWord(arg)} listOfWords={this.state.list}/>
        <Input changeListOfWords={(arg) => this.changeListOfWords(arg)} listOfWords={this.state.list} />
        <TableForWords listOfWords={this.state.list} changeListOfWords={(arg) => this.changeListOfWords(arg)}/>
      </div>
    );
  }
}

export default App;