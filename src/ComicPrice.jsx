import React from 'react';

var priceTagStyle = {
  display: 'block',
  position: 'relative',
  width: '60%',
  float: 'right',
  fontFamily: 'Bangers',
  textAlign: 'center',
  fontSize: '30px',
  paddingTop: '18px',
  color: 'red',
  backgroundColor: '#dedede',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
}

export default class ComicPrice extends React.Component {
  render() {
    return (
      <div style={priceTagStyle}>Price: ${this.props.prices[0].price}</div>
    )
  }
}
