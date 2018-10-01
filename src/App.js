import React, { Component } from 'react';
import Header from './Header';
import TableForWords from "./Vocabulary/TableForWords";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newWord: '',
    }
  }

  changeProps(){
    this.setState({
      newWord: '',
    });
  }

  addAWord(value){
    this.setState({
      newWord: value,
    })
  }

  render() {
    return (
      <div >
        <Header addAWord={(arg) => this.addAWord(arg)}/>
        <TableForWords newWord={this.state.newWord} chageProps={() => this.changeProps()}/>
      </div>
    );
  }
}

export default App;
