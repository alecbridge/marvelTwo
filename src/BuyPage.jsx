import React from 'react';

var buyPageStyle = {
  color:'red',
  width:'140px',
  height: '20px',
  padding: '10px 20px',
  border: '2px solid #ff0000',
  borderRadius: '7px',
  font: 'normal 16px/normal Georgia, serif',
  color: 'rgba(247,0,0,1)',
  background: 'rgba(220,220,220,1)',
}

export default class BuyPage extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Name" style={buyPageStyle}/> 
      </form>
    )
  }
}