import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Auth/Login';
import MyProfile from './Profile/MyProfile';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
            <li><Link to={'/MyProfile'} className="nav-link">MyProfile</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/MyProfile' component={MyProfile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;