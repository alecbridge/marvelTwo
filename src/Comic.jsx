import React from 'react';
import ReactDOM from 'react-dom';
import ComicTitle from './ComicTitle.jsx';
import ComicThumbnail from './ComicThumbnail.jsx';
import ComicPrice from './ComicPrice.jsx';
import BuyButton from './buybutton.jsx';

/* var comicStyling = {
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  maxHeight: '15%',
  borderBottom: '3px solid blue',
  clear: 'left'
}
*/

var comicStyling = {
  display: 'block',
  width: '950px',
  height: '500px',
  backgroundColor: '#dedede',
  clear: 'left',
  borderBottom: '3px solid darkgrey'
}

/* set up comicLeft and comicRight to style img > title/price , but got it fixed before styling that */

export default class Comic extends React.Component {
  render() {
    return (
          <div className="comic" style={comicStyling}>  
            <div className="comicLeft"><ComicTitle title={this.props.title} /> </div>
            <div className="comicRight">
             <ComicThumbnail thumbnail={this.props.thumbnail} />
             <ComicPrice prices={this.props.prices} />
             <BuyButton />
            </div>  
          </div>
    )
  }
}


