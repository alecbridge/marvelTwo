import React from 'react';
import ReactDOM from 'react-dom';
import Comics from './Comics.jsx';
import md5 from 'md5';
//import fetch from 'whatwg-fetch'; 

function fetchJSON(url) {
  return fetch(url).then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json();
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  });
}

function marvelFactory(config) {
  return function(path) {
    var timestamp = new Date().getTime();
    var hash = md5(timestamp + config.privateKey + config.publicKey);
    var url = config.hostname + '/v' + config.version + '/public' + path + '?apikey=' + config.publicKey + '&ts=' + timestamp + '&hash=' + hash;
    console.log(url);

    return fetchJSON(url);
  }
}

// Get an instance of the marvel api
var marvel = marvelFactory({
  hostname: 'http://gateway.marvel.com',
  publicKey: '9228da88dd1a2a154f40ddbaf5f7d37b',
  privateKey: '1a274b4e099b1110ac94cb3772e82705be286c3f',
  version: '1'
});

export default class DataFetcher extends React.Component {
  constructor(props){
    super(props);
    this.state={
      comics: []
    };
    this.getData()
  }

  getData(){
    marvel('/comics').then((json) => {
      this.setState({comics: json.data.results})
    })
  } 

  render() {
    return (
      <div>
      <Comics comics={this.state.comics} />
      </div>
    )
  }
}
