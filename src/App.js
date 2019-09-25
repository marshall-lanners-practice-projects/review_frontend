import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/common/Landing';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import Posts from './components/posts/Posts';
import NoPage from './components/common/NoPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/posts" component={Posts} />
      <Route component={NoPage} />
    </Switch>
  );
}

export default App;
