import React from 'react';

var comicImgThumbnail = {
  float: 'left',
  display: 'block',
  /*position: 'relative',*/
  width: '40%',
  minHeight: '490px',
  maxHeight: '490px',
  padding: '5px',
  marginTop: '2px',
  borderRight: '4px solid black',
  backgroundColor: 'aquamarine' 
}


export default class ComicThumbnail extends React.Component {
  render() {
      console.log(this.props.thumbnail.path + '.' + this.props.thumbnail.extension)
    return (
      <img src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension} style={comicImgThumbnail} />
    )
  }
}
