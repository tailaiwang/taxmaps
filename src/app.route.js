import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './Components/dashboard/dashboard.component'

class AppRoute extends Component{
    render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Route path="/" component={Dashboard} />
            </ Router>
        );
    }
}

export default AppRoute;