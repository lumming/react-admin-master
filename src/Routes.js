import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './App';
import Home from './page/Home';
import About from './page/About';
import Detail from './page/Detail';
import Vue from './page/Vue';
import ReactJs from './page/React';
//  hashHistory 带#路由
//      	<IndexRoute component={Home}/> //默认
//			<IndexRedirect to="/home"/> //访问根路由 重定向
const Routes = () => (
	<Router history = {browserHistory} >
        <Route path="/" component={App} >
        	<IndexRedirect to="/home"/>
        	<Route path="/home" component={Home} />
        	<Route path="/angular" component={About} />
        	<Route path="/home/detail/:id" component={Detail} />
        	<Route path="/vue" component={Vue} />
        	<Route path="/react" component={ReactJs} />
        </Route>	
    </Router>	
);

export default Routes;
