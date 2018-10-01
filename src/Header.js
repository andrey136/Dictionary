import React, { Component } from 'react';
import Input from './Input';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1>English Dictionary</h1>
        <p className="headerIndention">{}</p>
        <Input addAWord={(arg) => this.props.addAWord(arg)}/>
      </div>
    );
  }
}

export default Header;
