import React, {Component} from 'react';
import DashboardRouter from './dashboard/dashboard.route'

class homeScreen extends Component {
    render() {
        return (
            <h1>this is the homescreen</h1>
            <div>
            <DashboardRouter />
        </ div>
        );
    }
}

export default homeScreen;
