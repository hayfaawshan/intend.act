import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom"
import GettingStarted from './GettingStarted';
import ChooseIntention from './ChooseIntention';
import Trainings from './Trainings';
import Reflections from './Reflections';

function Journey() {
    let match = useRouteMatch();
    return (
        <Router>
            <div>
                <h1>Journey</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={`${match.url}/gettingstarted`}>Getting Started</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/chooseintention`}>Choose Intention</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/trainings`}>Trainings</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/reflections`}>Reflections</Link>
                        </li>                                                
                    </ul>
                </nav>
            </div>
            <Switch>
                    <Route path={`${match.url}/gettingstarted`}>
                        <GettingStarted />
                    </Route>
                    <Route path={`${match.url}/chooseintention`}>
                        <ChooseIntention />
                    </Route>
                    <Route path={`${match.url}/trainings`}>
                        <Trainings />
                    </Route>
                    <Route path={`${match.url}/reflections`}>
                        <Reflections />
                    </Route>
                </Switch>
        </Router>
    );
  }


export default Journey;