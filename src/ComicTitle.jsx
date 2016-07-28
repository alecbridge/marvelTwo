import React from 'react';
import ReactDOM from 'react-dom';

export default class ComicTitle extends React.Component {
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}
