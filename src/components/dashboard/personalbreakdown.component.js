import React, {Component} from 'react';
import "../../App.css";
import { Doughnut } from 'react-chartjs-2';
import {Container, Row, Col} from 'react-bootstrap';
import { requirements } from '../taxInformationInput'

var fedexpenses =require('./assets/json/federal-expenses');
var provexpenses = require('./assets/json/provincial-expenses-on');
var colours = require('./assets/colour-set');




const getData = (jdata, colourset) => {
	var data = {
		labels: [],
		datasets: [{
			data: [],
			backgroundColor: [],
      hoverBackgroundColor: [],
		}]
	};
	var i;
	var end = jdata.length - 1;
	var decimal;
	for (i = 0; i < end; i++) {
		data.labels.push(jdata[i].title);
		decimal = jdata[i].total / jdata[end]["Total Expenses"]
		data.datasets[0].data.push(decimal);
		data.datasets[0].backgroundColor.push(colourset[i]);
		data.datasets[0].hoverBackgroundColor.push(colourset[i]);
	}
	return data;
}

const getData2 = (jdata, colourset) =>{
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
	var decimal;
	for (i = 0; i < end; i++) {
		data.labels.push(jdata[i].title);
		decimal = jdata[i].amount / jdata[end].amount;
		data.datasets[0].data.push(decimal);
		console.log(requirements.property_tax);
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

class PersonalBreakdown extends Component {
    render() {
        return (
          <div className="personalBreakdown">
						<div className="chart" id="provincialchart">
							<h1 className="personalHeader">Provincial Tax Contributions and Spending</h1>
							<Doughnut
							data={getData2(provexpenses, colours)}
							legend={legendOpts}/>
						</div>
						<hr />
						<div className="chart" id="federalchart">
							<Container>
								<Row>
									<Col>
										<h1 className="personalHeader">Federal Personal Tax Breakdown</h1>
										<Doughnut data={getData(fedexpenses, colours)} legend={legendOpts2}/>
									</Col>
									<Col>
											<h1>What does this mean?</h1>
                      <ul>
                        <li><strong className="personstransfer">Major Transfers to Persons</strong>: This refers to payments made by the government to individuals
                          for income support and income supplement. The three major categories are elderly benefits, employment insurance, children's benefits.</li>
                        <li><strong className="personsgov">Major Transfers to Other Levels of Government</strong>: The Government provides financial support to provincial and territorial
                        governments to assist them in the provision of programs and services. There are four main transfer programs are:
                        Canada Health Transfer, the Canada Social Transfer, Equalization and Territorial Formula Financing.</li>
                        <li><strong className="personsdpe">Direct Program Expenses</strong>: These are direct investments into federal programs such as parks, health care, etc. </li>
                      </ul>
									</Col>
								</Row>
							</Container>
            </div>
          </div>
        );
    }
}

export default PersonalBreakdown;
