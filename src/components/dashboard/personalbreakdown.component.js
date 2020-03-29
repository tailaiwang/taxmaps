import React, {Component} from 'react';
import "../../App.css";
import { Doughnut } from 'react-chartjs-2';
import {Container, Row, Col} from 'react-bootstrap';
import { requirements } from '../taxInformationInput'

var fedexpenses =require('./assets/json/federal-expenses');
var provexpenses = require('./assets/json/provincial-expenses-on');
var colours = require('./assets/colour-set')[0];
var colours_fed = require('./assets/colour-set')[1];

var income_fed_rates = require('./assets/json/income-tax-federal-rates');
var income_fed_brackets = require('./assets/json/income-tax-federal');
var income_prov_rates = require('./assets/json/income-tax-provincial-rates');
var income_prov_brackets = require('./assets/json/income-tax-provincial');
//var sales_tax = require('./assets/json/sales-tax');

const federal_income_tax = (income, fed_brackets, fed_rates) => {
  var bracket_one_full = fed_brackets[0]["1"] * fed_rates[0]["1"]/100;
  var bracket_two_full = (fed_brackets[0]["2"] - fed_brackets[0]["1"]) * fed_rates[0]["2"]/100;
  var bracket_three_full = (fed_brackets[0]["3"] - fed_brackets[0]["2"]) * fed_rates[0]["3"]/100;
  var bracket_four_full = (fed_brackets[0]["4"] - fed_brackets[0]["3"]) * fed_rates[0]["4"]/100;

  if (income <= fed_brackets[0]["1"]) {
    return income * fed_rates[0]["1"]/100;
  }
  if (income > fed_brackets[0]["1"] && income <= fed_brackets[0]["2"]) {
	return bracket_one_full + (income - fed_brackets[0]["1"]) * fed_rates[0]["2"]/100;
  }
  if (income > fed_brackets[0]["2"] && income <= fed_brackets[0]["3"]) {
	return bracket_one_full + bracket_two_full + (income - fed_brackets[0]["2"]) * fed_rates[0]["3"]/100;
  }
  if (income > fed_brackets[0]["3"] && income <= fed_brackets[0]["4"]) {
	return bracket_one_full + bracket_two_full + bracket_three_full + (income - fed_brackets[0]["3"]) * fed_rates[0]["4"]/100;
  }
  if (income > fed_brackets[0]["4"]) {
	return bracket_one_full + bracket_two_full + bracket_three_full + bracket_four_full + (income - fed_brackets[0]["4"]) * fed_rates[0]["5"]/100;
  }
} 


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
						<div id="personalinfo">
							<h1>Your Personalized Breakdown: </h1>
							<Container>
								<Row>
									<Col className="bdcat">
										<h3>Povincial Taxes:</h3>
										<h4>Income Tax Paid: ${}</h4>
										<h4>GST Paid: ${}</h4>
									</Col>
									<Col className="bdcat">
										<h3>Federal Taxes:</h3>
										<h4>Income Tax Paid: ${}</h4>
										<h4>HST Paid: ${}</h4>
									</Col>
								</Row>
								<Row className="bdfin">
									<h3 id="totalcont">Total Contributions: $</h3>
								</Row>
							</Container>
						</div>
						<hr />
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
										<Doughnut data={getData(fedexpenses, colours_fed)} legend={legendOpts2}/>
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
