import React, {Component} from 'react';

class BodyOfTable extends Component {
  constructor(props){
    super(props);

    this.state= {
      list: [...this.props.listOfWords],
    };
  }

  formOfDefinition(el) {
    return (
      <td>
        <button onClick={() => this.changeListOfWords(el)}
                className="btn btn-link shown">{el.title}</button>
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
    const newList = this.state.list;
    const index = newList.findIndex(item => item.id === el.id);
    newList[index].showDefinition = !newList[index].showDefinition;
    this.setState({
      list: newList,
    });
  }

  render() {
    if (this.state.list !== this.props.listOfWords){
      this.setState({
        list: this.props.listOfWords,
      })
    }
    return (
      <tbody>
      {
        this.state.list.map(el => {
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
