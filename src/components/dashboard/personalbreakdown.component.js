import React, {Component} from 'react';
import "../../App.css";
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class PersonalBreakdown extends Component {

    render() {
        return (
            <div className="personalBreakdown">
            <div className="Chart">
              <h1>the chart goes here</h1>
              <Pie data={data} />
            </div>
          </div>
        );
    }
}

export default PersonalBreakdown;
