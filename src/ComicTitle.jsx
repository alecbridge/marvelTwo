import React from 'react';

var comicTitleStyle = {
  display: 'block',
  width: '60%',
  float: 'right',
  fontFamily: 'cursive',
  fontFamily: 'Bangers',
  textAlign: 'center',
  fontSize: '40px',  /* change back to 55px eventually after Bangers imported */
  minHeight: '100px',
  maxHeight: '200px',
  paddingTop: '15px',
  paddingBottom: '25px',
  color: 'purple',
  backgroundColor: 'lightgrey',
  /*borderTop: '2px solid grey',      This makes it look fixed for border */
 /* textShadow:
  -5px -1px 0 #000,  
   1px -1px 0 #000,
  -1px 1px 0 #000,
   1px 1px 0 #000; */
}

export default class ComicTitle extends React.Component {
  render() {
    return (
      <div style={comicTitleStyle}>{this.props.title}</div>
    )
  }
}



/*comic-title, price-tag {
  display: block;
  width: 60%;
  float: left;
  font-family: 'Bangers', cursive;
  text-align: center;
}
*/