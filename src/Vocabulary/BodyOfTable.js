import React, {Component} from 'react';

class BodyOfTable extends Component {
  constructor(props){
    super(props);
    this.listOfWords = [...this.props.listOfWords];
  }

  formOfDefinition(el) {
    return (
      <td>
        <button onClick={() => {el.showDefinition = !el.showDefinition; this.props.changeListOfWords(this.listOfWords);}}
                className="btn btn-link shown">{el.title}</button>
        {el.value}
      </td>
      );
  }

  formOfButton(el){
    return(
      <td>
        <button onClick={() => {el.showDefinition = !el.showDefinition; this.props.changeListOfWords(this.listOfWords);}}
                className="btn btn-link">{el.title}</button>
      </td>
    );
  }

  render() {
    return (
      <tbody>
      {
        this.listOfWords.map(el => {
          return (
            <tr key={el.id}>
                {el.showDefinition ? this.formOfDefinition(el) : this.formOfButton(el)}
            </tr>
          )
        })}
      </tbody>
    )
  }

}

export default BodyOfTable;
