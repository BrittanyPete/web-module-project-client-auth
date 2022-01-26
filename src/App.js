import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';


function App() {

  const isLoggedIn = localStorage.getItem("token");

  return (
    <Router>
      <div className="App">
        <header>

          <div>
          <h1>Friends Database</h1>
          </div>

          <div className='links'>
            <Link to="/login">Login</Link>
          {isLoggedIn && (
              <Link to="/friends">Friends</Link>
          )}
          {isLoggedIn && (
              <Link to="/friends/add">AddFriend</Link>
          )}
          {isLoggedIn && (
              <Link to="/logout">Logout</Link>
          )}
          </div>
        </header>
      <hr/>

        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
