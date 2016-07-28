  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import DataFetcher from './DataFetcher.jsx';

  class App extends Component {
    render() {
      return (
        <div>
          <h1>Welcome</h1>
          <DataFetcher />
        </div>  
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
