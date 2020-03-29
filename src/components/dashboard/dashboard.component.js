import React, {Component} from 'react';
import DashboardRouter from './dashboard.route';
import {NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logos/words_coloured_fitted.png';
import icon from './assets/logos/black_icon.png';

class Dashboard extends Component {
    render() {
        return (
            <div className="main">
            <Navbar bg="light" variant="light">
              <Navbar.Brand href="../homescreen">
              <img
                alt="logo"
                src={logo}
                width="160"
                height="40"
                className="d-inline-block align-center"
              />{}

              </Navbar.Brand>
              <NavLink className="main-anchor" to="/taxInformationInput">Tax Input</ NavLink>
              <NavLink className="main-anchor" to="/personal-breakdown">Personal Breakdown</ NavLink>
              <NavLink className="main-anchor" to="/property-tax-map">Property Tax Map</ NavLink>
              <NavLink className="main-anchor" to="/political-candidates">Political Candidates</ NavLink>
              <NavLink className="main-anchor" to="/upload-receipts">Upload Receipts</ NavLink>

              <img
                alt="icon"
                src={icon}
                width="40"
                height="40"
                className="icon ml-auto"
              />{}
            </Navbar>
                <div>
                    <DashboardRouter />
                </ div>
            </ div>
        );
    }
}

export default Dashboard;
