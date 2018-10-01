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
          </tr>
          </thead>
            <BodyOfTable listOfWords={this.props.listOfWords}/>
        </table>
      </div>
    );
  }
}

export default TableForWords;
