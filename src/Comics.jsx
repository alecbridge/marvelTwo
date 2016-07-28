import React from 'react';
import ReactDOM from 'react-dom';
import Comic from './Comic.jsx';

export default class Comics extends React.Component {
  render() {
    return (
      <div>  
        <Comic />
        <Comic />
      </div>   
    )
  }
}
