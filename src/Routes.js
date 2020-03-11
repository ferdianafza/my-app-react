import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import MyProfile from './Profile/MyProfile';
import Login from './Auth/Login';

export default () => {
  return (
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/myprofile">MyProfile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/myprofile">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}