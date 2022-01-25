import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Friends from './components/Friends';


function App() {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <Router>
    <div className="App">
      <h1>Friends Database</h1>
      <ul>
        <li><Link to="/login">Login</Link></li>
        
          {
            isLoggedIn && <li><Link to="/friends">FriendList</Link></li>
          }
        
        {/* <li><Link to="/addFriend">AddFriend</Link></li>
        <li><Link to="/logout">Logout</Link></li> */}
      </ul>
      <Switch>
        <PrivateRoute exact path='/friends' component={Friends} />
        {/* <Route path='/addFriend' component={AddFriend} />
        <Route path='/logout' component={Logout} /> */}
        <Route path='/login' component={Login} />
        <Route path='/' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
