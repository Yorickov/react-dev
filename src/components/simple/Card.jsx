import React from 'react';

const Body = ({ children }) => <div className="card-body">{children}</div>;
const Title = ({ children }) => <h4 className="card-title">{children}</h4>;
const Text = ({ children }) => <p className="card-text">{children}</p>;
const Button = () => <button type="button" className="btn btn-primary">Press me</button>;

const Card = ({ children }) => <div className="card">{children}</div>;

Card.Body = Body;
Card.Title = Title;
Card.Text = Text;
Card.Button = Button;

export default Card;
