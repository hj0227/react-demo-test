import { polyfill, Promise } from 'es6-promise';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import FastClick from 'fastclick';

import { HashRouter, Route } from 'react-router-dom';


/*import containers*/
import App from './containers/App';
import Home from './containers/Home';

/*import container*/
import { store } from './store/configureStore';


//路由配置
render(
	<Provider store={store} >
		<HashRouter>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/app" component={App} />
				<Route path="/home" component={Home} />
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);



