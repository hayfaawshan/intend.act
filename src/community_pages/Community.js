import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom"
import AccountabilityGroup from './AccountabilityGroup';
import OthersOnTheSameJourney from './OthersOnTheSameJourney';
import QandA from './QandA';
import FindEvents from './FindEvents';

function Community() {
    let match = useRouteMatch();
    return (
        <Router>
            <div>
                <h1>Community</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`${match.url}/accountabilitygroup`}>Accountability group</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/othersonthesamejourney`}>Others on the same journey</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/Q&A`}>Q &amp; A</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/findevents`}>Find events</Link>
                        </li>                                             
                    </ul>
                </nav>
                <Switch>
                    <Route path={`${match.url}/accountabilitygroup`}>
                        <AccountabilityGroup />
                    </Route>
                    <Route path={`${match.url}/othersonthesamejourney`}>
                        <OthersOnTheSameJourney />
                    </Route>
                    <Route path={`${match.url}/Q&A`}>
                        <QandA />
                    </Route>
                    <Route path={`${match.url}/findevents`}>
                        <FindEvents />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
  }

export default Community;