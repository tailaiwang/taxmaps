import React, {Component} from 'react';
import logo from './dashboard/assets/logos/coloured_logo_fitted.png';
import {Link, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import canmap from './dashboard/assets/can_map.svg';

class homeScreen extends Component {
    render() {
        return (
          <div>
            <img id="homeLogo" src={logo} />
            <img id="canmap" src={canmap} />
            <Button className="learn-btn" variant="success" type="submit">
              <Link className="btn-link" to="/taxInformationInput">Learn About My Taxes</Link>
            </Button>
            <Route path="/taxInformationInput">
              <taxInformationInput />
            </Route>
          </div>
        );
    }
}

export default homeScreen;
