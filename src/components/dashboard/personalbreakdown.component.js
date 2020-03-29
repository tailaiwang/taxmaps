import React, {Component} from 'react';
import "../../App.css";
import { Doughnut } from 'react-chartjs-2';

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

class PersonalBreakdown extends Component {
    render() {

        return (
          <div className="personalBreakdown">
            <div className="chart">
              <h1 className="personalHeader">Federal Personal Tax Breakdown</h1>
              <Doughnut data={getData(fedexpenses, colours)} legend={legendOpts}/>
            </div>
              
            <div className="chart">
              <h1 className="personalHeader">Provincial Tax Contributions and Spending</h1>
              <Doughnut 
              data={getData2(provexpenses, colours)} 
              legend={legendOpts}/>
            </div>
          </div>
        );
    }
}

export default PersonalBreakdown;
