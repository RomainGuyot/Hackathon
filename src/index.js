import React from 'react';
import ReactDOM from 'react-dom';

// YOUR CODE HERE

const Button = (props) => <button type="button">{props.name}</button>

ReactDOM.render(
  <Button name='1'/>,
  document.getElementById('root')
);