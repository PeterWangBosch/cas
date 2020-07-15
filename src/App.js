import React, { Component, useState, useContext } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import './assets/theme/mobile/css/common.css';
import './assets/theme/mobile/css/home.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './layouts/MainPage.js'
import routes from './routes.js'

export const SearchCtx = React.createContext();

function App() {
  const [key, setKey] = useState('aa');
  const [result, setResult] = useState({});
  const [first, setFirst] = useState(true);
  const [type, setType] = useState(0);
  const [msg, setMsg] = useState(0);

  const store = {
    key: { get: key, set: setKey },
    type: { get: type, set: setType },
    result: { get: result, set: setResult },
    first: { get: first, set: setFirst },
    msg: { get: msg, set: setMsg }
  };

  return (
    <SearchCtx.Provider value = { store }>
    <Router basename={ process.env.REACT_APP_BASENAME || "/" }>
      <div>
	{routes.map((route, index) => {
	  return (
	    <Route
	      key={index}
	      path={route.path}
	      exact={route.exact}
	      component={ () => {
		return (
		  <route.layout >
		    <route.component ctx={SearchCtx} />
		  </route.layout>
		);
	      }}
	    />
	  );
	})}
      </div>
    </Router>
    </SearchCtx.Provider>
  );
}

export default App;
