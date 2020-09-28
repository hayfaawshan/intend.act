import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import TodayUpcoming from './TodayUpcoming';
import Journey from './journey_pages/Journey';
import Community from './community_pages/Community.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Today &amp; Upcoming</Link>
            </li>
            <li>
              <Link to="/journey">Journey</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/journey">
            <Journey />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/">
            <TodayUpcoming />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
