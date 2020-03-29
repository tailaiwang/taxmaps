import React, {Component} from 'react'
import "../../App.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

var trudeaubudget =require('./assets/json/trudeau-budget');
var trudeaupolicy = require('./assets/json/trudeau-policy-costs');
var colours = require('./assets/colour-set');

class PoliticalCandidates extends Component {
    render() {
        return (
            <div>
              <h1>Political Candidate Breakdowns</ h1>
              <div>
              <Tabs defaultActiveKey="profile" id="tab-cands" className="poli-tabs">
                <Tab eventKey="can1" title="Justin Trudeau">
                  <p>I THINK HONG YI IS THE BEST CANDIDATE</p>
                </Tab>
                <Tab eventKey="can2" title="Andrew Scheer">
                  <p>THE SECOND BEST IS TAILAI AND DANLU CUZ HES OKAY AT LOL</p>
                </Tab>
                <Tab eventKey="can3" title="Jagmeet Singh">
                  <p>TIE FOR THIRD PLACE W UKNOW WHO (R GILLAN)</p>
                </Tab>
               </Tabs>
              </div>
            </div>
        );
    }
}

export default PoliticalCandidates;
