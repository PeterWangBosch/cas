import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import './assets/theme/mobile/css/common.css';
import './assets/theme/mobile/css/home.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './layouts/MainPage.js'
import routes from './routes.js'

function App() {
  return (
    <Router basename={ process.env.REACT_APP_BASENAME || "./" }>
      <div>
	{routes.map((route, index) => {
	  return (
	    <Route
	      key={index}
	      path={route.path}
	      exact={route.exact}
	      component={props => {
		return (
		  <route.layout {...props}>
		    <route.component {...props} />
		  </route.layout>
		);
	      }}
	    />
	  );
	})}
      </div>
    </Router>
  );
}

export default App;
