import React, {Component} from 'react';
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

class chart extends Component {

    render() {
        return (
            <div className="Chart">
              <h1>the chart goes here</h1>
              <Pie data={data} />
            </div>
        );
    }
}

export default chart;
