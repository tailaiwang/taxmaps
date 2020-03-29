import React, {Component} from 'react'
import "../../App.css";
import Tab from 'react-bootstrap/Tab';
import {Container, Row, Col} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import { Pie } from 'react-chartjs-2';
import trudeau from './assets/justintrudeau.jpg';
import scheer from './assets/andrewscheer.jpg';
import singh from './assets/jagmeetsingh.jpg';

var trudeaubudget =require('./assets/json/trudeau-budget');
var trudeaupolicy = require('./assets/json/trudeau-policy-costs');
var scheerbudget =require('./assets/json/scheer-budget');
var scheerpolicy = require('./assets/json/scheer-policy-costs');
var jagmeetbudget =require('./assets/json/jagmeet-budget');
var jagmeetpolicy = require('./assets/json/jagmeet-policy-costs');
var colours = require('./assets/colour-set')[0];

const getData = (jdata, colourset) =>{
  var data = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: []
    }]
  };
  var i;
  var end = jdata.length - 1;
  var decimal = 0;
  for (i = 0; i < end; i++) {
    data.labels.push(jdata[i].title);
    decimal = jdata[i].amount / jdata[end].amount;
    data.datasets[0].data.push(decimal);
    data.datasets[0].backgroundColor.push(colourset[i]);
    data.datasets[0].hoverBackgroundColor.push(colourset[i]);
  }
  return data;
}

const legendOpts = {
  display: true,
  position: 'right',
  fullWidth: true,
  fullHeight: true,
  reverse: false,
  boxWidth: 50,
  align: 'start',
  labels: {
    fontColor: 'rgb(58, 62, 65)',
    padding: 13,
    fontSize: 14,
    fontFamily: 'Raleway',
    usePointStyle: false
  }
};

const legendOpts2 = {
  display: true,
  position: 'bottom',
  fullWidth: true,
  fullHeight: true,
  reverse: false,
  boxWidth: 50,
  align: 'start',
  labels: {
    fontColor: 'rgb(58, 62, 65)',
    padding: 13,
    fontSize: 14,
    fontFamily: 'Raleway',
    usePointStyle: false
  }
};

class PoliticalCandidates extends Component {
    render() {
        return (
            <div>
              <h1>Political Candidate Breakdowns</ h1>
              <div>
              <Tabs defaultActiveKey="profile" id="tab-cands" className="poli-tabs">
                <Tab eventKey="can1" title="Justin Trudeau">
                <div className = "biography">
                <Container>
                <Row>
                  <Col>
                    <h1 className="personalHeader">Meet Justin Trudeau</h1>
                    <img src={trudeau} alt="Justin Trudeau" className = "candidate"></img>
                  </Col>
                  <Col>
                      <h1>Biography</h1>
                      <p className="bio-padding"><strong>Justin Trudeau</strong> spent his early years in the spotlight as the son of famed 
                        Canadian prime minister Pierre Trudeau. After college, Justin worked as a teacher 
                        for several years before entering politics. He was first elected to the Canadian 
                        Parliament in 2008. In 2013, Trudeau became the leader of the Liberal Party. He 
                        and his party won an impressive victory in 2015 with Trudeau becoming the 
                        country's second youngest prime minister.</p>
                  </Col>
                </Row>
              </Container>
              <hr className="hrpadding"/>
                  <h4>Liberal Party Policy Implementation Costs (2019-2020)</h4>
                  <Pie data={getData(trudeaupolicy, colours)} legend={legendOpts}/>
                  <hr/>
                  <h4>Liberal Party Operating Budget (2019-2020)</h4>
                  <Pie data={getData(trudeaubudget, colours)} legend={legendOpts2}/>
                  </div>
                </Tab>
                <Tab eventKey="can2" title="Andrew Scheer">
                <div className = "biography">
                <Container>
                
                <Row>
                  <Col>
                    <h1 className="personalHeader">Meet Andrew Scheer</h1>
                    <img src={scheer} alt="andrewscheer" className = "candidate"></img>
                  </Col>
                  <Col>
                      <h1>Biography</h1>
                      <p className="bio-padding"><strong>Andrew Scheer</strong>, leader of the Conservative Party of 
                        Canada and leader of the Opposition (2017– ), Speaker of the House of Commons, member of 
                        Parliament (born 20 May 1979 in Ottawa, ON). In 2017, he became the second Conservative 
                        leader since the party's re-formation in 2004. Under Scheer, the Conservatives won 121 seats 
                        during the 2019 federal election, increasing their presence in the House of Commons. </p>
                  </Col>
                </Row>
              </Container>
              <hr className="hrpadding"/>
                  <h4>Conservative Party Proposed Policy Implementation Costs (2019 Election)</h4>
                  <Pie data={getData(scheerpolicy, colours)} legend={legendOpts}/>
                  <hr/>
                  <h4>Conservative Party Proposed Operating Budget (2019 Election)</h4>
                  <Pie data={getData(scheerbudget, colours)} legend={legendOpts2}/>
                  </div>
                </Tab>
                <Tab eventKey="can3" title="Jagmeet Singh">
                <div className = "biography">
                <Container>
                
                <Row>
                  <Col>
                    <h1 className="personalHeader">Meet Jagmeet Singh</h1>
                    <img src={singh} alt="Jagmeet Singh" className = "candidate"></img>
                  </Col>
                  <Col>
                      <h1>Biography</h1>
                      <p className="bio-padding"><strong>Jagmeet Singh Jimmy Dhaliwal</strong>, leader of the New Democratic 
                      Party of Canada 2017–present, MPP, lawyer (born 2 January 1979 in Scarborough, ON). Singh is the first 
                      racialized leader of a major national political party in Canada. He was also the first turban-wearing 
                      Sikh elected to the Ontario legislature.</p>
                  </Col>
                </Row>
              </Container>
              <hr className="hrpadding"/>
                  <h4>New Democratic Party Proposed Policy Implementation Costs (2019 Election)</h4>
                  <Pie data={getData(jagmeetpolicy, colours)} legend={legendOpts}/>
                  <hr/>
                  <h4>New Democratic Party Party Proposed Operating Budget (2019 Election)</h4>
                  <Pie data={getData(jagmeetbudget, colours)} legend={legendOpts2}/>
                  </div>
                </Tab>
               </Tabs>
              </div>
            </div>
        );
    }
}

export default PoliticalCandidates;