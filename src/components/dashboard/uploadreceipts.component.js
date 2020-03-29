import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import { Radar } from 'react-chartjs-2';

var reciept1 =require('./assets/json/reciept1');
var reciept2 =require('./assets/json/reciept2');
var colours = require('./assets/colour-set')[1];


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
	var end = jdata.length;
	var decimal;
	for (i = 0; i < end; i++) {
		data.labels.push(jdata[i].title);
		decimal = jdata[i].amount;
		data.datasets[0].data.push(decimal);
		data.datasets[0].backgroundColor.push(colourset[i]);
		data.datasets[0].hoverBackgroundColor.push(colourset[i]);
	}
	return data;
}

const legendOpts = {
  display: false,
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
class UploadReceipts extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
          this.setState({files})
        };
        this.state = {
          files: []
        };
      }

    render() {
            const files = this.state.files.map(file => (
              <li key={file.name}>
                {file.name} - {file.size} bytes
              </li>
            ));

        return (
            <Dropzone className="dropzone" onDrop={this.onDrop}>
            {({getRootProps, getInputProps}) => (
              <section className="container">
                                  <aside>
                  <h1>Upload your files here</h1>
                  <ul>{files}</ul>
                </aside>
                <div {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps()} />
                  <p id="dropzone-txt">Drag & drop some files here, or click to select files</p>
                </div>
                <hr></hr>
                <div className="chart" id="provincialchart">
                  <h4 className="personalHeader">Reciept #2 (2020-03-29)</h4>
                  <Radar
                    data={getData2(reciept1, colours)}
                  legend={legendOpts}/>
                </div>
                <hr></hr>
                <div className="chart" id="provincialchart">
                  <h4 className="personalHeader">Reciept #1 (2020-03-11)</h4>
                  <Radar
                    data={getData2(reciept2, colours)}
                  legend={legendOpts}/>
                </div>
              </section>
            )}
        </Dropzone>
        
        );
      }
    }


export default UploadReceipts;
