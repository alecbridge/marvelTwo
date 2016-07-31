import React from 'react';
  
var buttonHolder = {
  backgroundColor: 'white',
  textAlign: 'center',
}

var buttonStyle = {
  backgroundColor: 'red',
  color: "white",
  width: '15%',
  fontSize: '24px',
  marginTop: '18px',
  border: '1px solid black',
  borderRadius:'10px',
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
