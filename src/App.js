import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import MyProfile from './Profile/MyProfile';
import Student from './Students/Student';
import UpdateStudent from './Students/UpdateStudent';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/signup'} className="nav-link"> Signup </Link></li>
            <li><Link to={'/'} className="nav-link"> Login </Link></li>
            <li><Link to={'/MyProfile'} className="nav-link">MyProfile</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/' component={Login} />
              <Route path='/MyProfile' component={MyProfile} />
              <Route path='/Students/:id/edit' component={UpdateStudent} />
              <Route path='/Students/:id' component={Student} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;