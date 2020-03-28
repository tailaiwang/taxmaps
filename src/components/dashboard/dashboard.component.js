import React, {Component} from 'react';
import DashboardRouter from './dashboard.route';
import {NavLink} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className="main">
                <h4>TaxMaps</ h4>
                <nav>
                    <NavLink className="main-anchor" to="/personal-breakdown">Personal Breakdown</ NavLink>
                    <NavLink className="main-anchor" to="/political-candidates">Political Candidates</ NavLink>
                    <NavLink className="main-anchor" to="/upload-receipts">Upload Receipts</ NavLink>
                    <NavLink className="main-anchor" to="/taxInformationInput">tax input</ NavLink>
                </nav>
                <div>
                    <DashboardRouter />
                </ div>
            </ div>
        );
    }
}

export default Dashboard;
