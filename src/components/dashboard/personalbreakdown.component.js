import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import "../../App.css";

var jsondata = require('./testing');
var fedexpenses =require('./assets/json/federal-expenses');
var provexpenses = require('./assets/json/provincial-expenses-on');
var colours = require('./assets/colour-set');

const getData = (jdata, colourset) => {
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
		console.log(jdata[i].title);
		decimal = jdata[i].total / jdata[end]["Total Expenses"]
		data.datasets[0].data.push(decimal);
		console.log(decimal);
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
		data.datasets[0].backgroundColor.push(colourset[i]);
		data.datasets[0].hoverBackgroundColor.push(colourset[i]);
	}
	return data;
}

class PersonalBreakdown extends Component {
    render() {
        return (
          <div className="personalBreakdown">
            <div className="chart">
              <h1 className="personalHeader">Personal Tax Breakdown</h1>
              <Pie data={getData(fedexpenses, colours)} />
              </div>
              <div className="chart">
              <h1 className="personalHeader">Tax Contributions and Spending</h1>
              <Pie data={getData2(provexpenses, colours)}/>
            </div>
          </div>
        );
    }
}

export default PersonalBreakdown;
