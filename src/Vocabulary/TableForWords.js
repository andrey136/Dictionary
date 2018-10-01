import React, {Component} from 'react';
import Vocabulary from "./Vocabulary";

class TableForWords extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
          <tr>
            <th scope="col">My English Words</th>
          </tr>
          </thead>
            <Vocabulary listOfWords={this.props.listOfWords} newWord={this.props.newWord} changeProps={this.props.changeProps()}/>
        </table>
      </div>
    );
  }
}

export default TableForWords;
