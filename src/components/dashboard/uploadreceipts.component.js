import React, {Component} from 'react'
import Dropzone from 'react-dropzone'


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
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
        </Dropzone>
        );
      }
    }


export default UploadReceipts;
