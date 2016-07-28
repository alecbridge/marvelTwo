import React from 'react';
import ReactDOM from 'react-dom';
import ComicTitle from './ComicTitle.jsx';
import ComicThumbail from './ComicThumbnail.jsx';
import ComicPrice from './ComicPrice.jsx';

export default class Comic extends React.Component {
  render() {
    return (
      <div>
      {this.props.comics.map(function(item){
        return (
          <div>  
          <ComicTitle title={this.props.title} />
          <ComicThumbnail thumbnail={this.props.thumbnail} />
          <ComicPrice price={this.props.prices} />
          </div>
        )
      })}    
      </div>
    )
  }
}
