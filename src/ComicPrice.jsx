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
  backgroundColor: 'white'
}

export default class ComicPrice extends React.Component {
  render() {
    return (
      <div style={priceTagStyle}>Price: ${this.props.prices[0].price}</div>
    )
  }
}
