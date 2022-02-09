import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getUser } from './utils/auth';
import routes from './routes';
import { Switch, BrowserRouter } from 'react-router-dom';

function App() {
  //Create Auth Context to check login, redirect to login if not logged in, redirect to home if logged in
  return (
    <BrowserRouter>
      <Switch>{routes}</Switch>
    </BrowserRouter>
  );
}

export default App;
