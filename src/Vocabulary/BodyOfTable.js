import React, {Component} from 'react';

class BodyOfTable extends Component {

  formOfDefinition(el) {
    return (
      <td>
        {el.value}
      </td>
      );
  }

  formOfButton(el){
    return(
      <td>
        <button onClick={() => this.changeListOfWords(el)}
                className="btn btn-link">{el.title}</button>
      </td>
    );
  }

  changeListOfWords(el) {
    const newList = this.props.listOfWords;
    const index = newList.findIndex(item => item.id === el.id);
    newList[index].showDefinition = !newList[index].showDefinition;
    return this.props.changeListOfWords(newList);
  }

  deleteItem(id){
    console.log(id);
  }

  render() {
    return (
      <tbody>
      {
        this.props.listOfWords.map(el => {
          return (
            <tr key={el.id}>
              {this.formOfButton(el)}
              {el.showDefinition ? this.formOfDefinition(el) : <td>{}</td>}
              <td className="options" onClick={this.deleteItem(el.id)}><button className="btn btn-success">Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    )
  }

}

export default BodyOfTable;
