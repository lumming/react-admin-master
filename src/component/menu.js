import React, { Component } from 'react';
import { Link } from 'react-router';

//  			<IndexLink to="/" activeClassName="active">根路由</IndexLink>	

class Menu extends Component {
  render() {
  	return(
  		<div>
				<ul>
					<li><Link to="/home" activeClassName="active">Home</Link></li>
					<li><Link to="/about" activeClassName="active">About</Link></li>				
				</ul>
			</div>
    );
  }
};

export default Menu;
