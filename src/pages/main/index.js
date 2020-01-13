import React from 'react';
import {Link} from 'react-router-dom';
class Main extends React.Component {
   render() {
      return (
         <div>
            <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            </ul>
            {this.props.children}
         </div>
      )
   }
}
export default Main;

