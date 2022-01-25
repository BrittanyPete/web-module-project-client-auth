import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';


function App() {
  return (
    <Router>
    <div className="App">
      <h1>Friends Database</h1>
      <ul>
        <li><Link to="/login">Login</Link></li>
        {/* <li><Link to="/friendList">FriendList</Link></li>
        <li><Link to="/addFriend">AddFriend</Link></li>
        <li><Link to="/logout">Logout</Link></li> */}
      </ul>
      <Switch>
        {/* <Route path='/friendList' component={FriendList} />
        <Route path='/addFriend' component={AddFriend} />
        <Route path='/logout' component={Logout} /> */}
        <Route path='/login' component={Login} />
        <Route path='/' component={Login}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
