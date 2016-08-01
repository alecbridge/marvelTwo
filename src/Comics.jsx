import React from 'react';
import ReactDOM from 'react-dom';
import Comic from './Comic.jsx';

var comicsListStyle = {
  backgroundColor: 'white',
  display: 'block',
  margin: '0 auto',
  width: '74%',
  maxWidth: '75%',
  maxHeight: '100%',
  clear: 'both',
  overflow: 'auto',
  border: '3px solid #d30808',
  borderRadius: '5px'
}

export default class Comics extends React.Component {
  render() {
    return (
      <div className="comicsListing" style={comicsListStyle}>  
        {this.props.comics.map(function(item){       
          return (
          <Comic  title={item.title} thumbnail={item.thumbnail} prices={item.prices} key={item.id} />
          )
        })}
      </div>   
    )
  }
}
