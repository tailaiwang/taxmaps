import React, {Component} from 'react';
import "../../App.css";
import {Pie} from 'react-chartjs-2';

var jsondata = require('./testing');
var colours = require('./assets/colour-set')

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
	console.log(jdata.length);
	for (i = 0; i < jdata.length; i++) {
		data.labels.push(jdata[i].title);
		console.log(jdata[i].title);
		data.datasets[0].data.push(jdata[i].decimal);
		console.log(jdata[i].decimal);
		data.datasets[0].backgroundColor.push(colourset[i]);
		data.datasets[0].hoverBackgroundColor.push(colourset[i]);
	}
	return data;
}



class PersonalBreakdown extends Component {

    render() {
        return (
            <div className="personalBreakdown">
            <div className="Chart">
              <h1>the chart goes here</h1>
              <Pie data={getData(jsondata, colours)} />
            </div>
          </div>
        );
    }
}

export default PersonalBreakdown;
