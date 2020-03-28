import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory';
<<<<<<< HEAD
import Dashboard from './Components/dashboard/dashboard.component'
import taxInformationInput from './Components/taxInformationInput';
import homeScreen from './Components/homeScreen'
=======
import Dashboard from './components/dashboard/dashboard.component'
>>>>>>> a0bcdfc9fd229b0d3eea4fef9553f55d07fdd304

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