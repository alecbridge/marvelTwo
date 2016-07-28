import React from 'react';
import ReactDOM from 'react-dom';

export default class ComicThumbnail extends React.Component {
  render() {
    return (
      <div>{this.props.thumbnail}</div>
    )
  }
}
