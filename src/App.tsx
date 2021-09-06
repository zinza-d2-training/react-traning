import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getUser} from './utils/auth'
import routes from './routes'
import {Switch, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
