  import React, {Component} from 'react';
  import ReactDOM from 'react-dom';
  import globalStyles from './assets/styles/global.css';
  import DataFetcher from './DataFetcher.jsx';

  import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
  import BuyPage from './BuyPage.jsx';


  var marvelHeroesStyle = {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '80%',
    margin: '0 auto' 
  };

  var marvelHeroesImg = {
    border: 'none',
    backgroundColor: 'black',
    width: '100%',
    height: '80%'
  };

  class App extends Component {
    render() {
      return (
        <div>
          <marvelHeroes style={marvelHeroesStyle}><img style={marvelHeroesImg} src="http://demandware.edgesuite.net/aamz_prd/on/demandware.static/-/Sites-disneyuk-Library/default/dwe56ec0ca/assets/franchise/2015/4508_fp_FWB_Marvel_11122014.png"  /></marvelHeroes>
           {this.props.children}
        </div>  
      );
    }
  }

  // ReactDOM.render(
  //   <App />,
  //   document.getElementById('root')
  // );
  
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={DataFetcher} />
        <Route path="buy" component={BuyPage} />
      </Route>
    </Router>,
    document.getElementById('root')
  );
