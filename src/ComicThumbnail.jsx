import React from 'react';

var comicImgThumbnail = {
  float: 'left',
  display: 'block',
  /*position: 'relative',*/
  width: '40%',
  minHeight: '490px',
  maxHeight: '490px',
  padding: '5px',
  /*borderRight: '4px solid lightgrey',*/
  backgroundColor: '#dedede' 
}

export default class ComicThumbnail extends React.Component {
  render() {
      console.log(this.props.thumbnail.path + '.' + this.props.thumbnail.extension)
    return (
      <img src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension} style={comicImgThumbnail} />
    )
  }
}
