import React from 'react';
import ReactDOM from 'react-dom';

export default class ComicPrice extends React.Component {
  render() {
    return (
      <div>{this.props.prices}</div>
    )
  }
}
