import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
import Dashboard from './components/dashboard/dashboard.component'
import taxInformationInput from './components/taxInformationInput';
import homeScreen from './components/homeScreen'

class AppRoute extends Component{
    render() {
        const history = createHistory();
        return (
            <Router history={history}>
                <Route path="/" component={Dashboard} />
                <Route path="/homeScreen" component={homeScreen} />
                <Route path="/taxInformationInput" component={taxInformationInput} />
            </ Router>
        );
    }
}

export default AppRoute;