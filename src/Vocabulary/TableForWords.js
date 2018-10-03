import React, {Component} from 'react';
import BodyOfTable from "./BodyOfTable";

class TableForWords extends Component {
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
          <tr>
            <th scope="col">My English Words</th>
            <th>Definition</th>
            <th scope="col" className="options">Options</th>
          </tr>
          </thead>
            <BodyOfTable changeListOfWords={(arg) => this.props.changeListOfWords(arg)} listOfWords={this.props.listOfWords}/>
        </table>
      </div>
    );
  }
}

export default TableForWords;
