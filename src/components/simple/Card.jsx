import React, { Component } from 'react';

const Body = ({ children }) => <div className="card-body">{children}</div>;
const Title = ({ children }) => <h4 className="card-title">{children}</h4>;
const Text = ({ children }) => <p className="card-text">{children}</p>;
const Button = () => <button type="button" className="btn btn-primary">Press me</button>;

class Card extends Component {
  static Body = Body;

  static Title = Title;

  static Text = Text;

  static Button = Button;

  render() {
    const { children } = this.props;
    return (
      <div className="card">{children}</div>
    );
  }
}

export default Card;
