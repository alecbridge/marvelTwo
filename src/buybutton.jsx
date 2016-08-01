import React from 'react';
  
var buttonHolder = {
  backgroundColor: '#dedede',
  textAlign: 'center',
}

var buttonStyle = {
  backgroundColor: 'red',
  color: "white",
  width: '15%',
  fontSize: '24px',
  marginTop: '18px',
  border: '2px solid black',
  borderRadius:'10px',
  textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
}

export default class BuyButton extends React.Component {
  render() {
    return (
      <div style={buttonHolder}>
      <input type="submit" style={buttonStyle} value="BUY" />
      </div>
    )
  }
}
