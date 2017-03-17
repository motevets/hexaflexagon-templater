import React, { Component } from 'react';
import './App.css';
import Hexaflexagon from './Hexaflexagon';

class App extends Component {

  state = {
    fileUrls: []
  }

  onFilesChange = (e) => {
    const newFiles = e.target.files;
    const newFileUrls = [];
    for(let i = 0; i < newFiles.length; i++) {
      newFileUrls.push(window.URL.createObjectURL(newFiles[i]));
    }
    this.setState({
      fileUrls: newFileUrls
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hexaflexagon Templater</h2>
        </div>
        <div className="App-body">
          <div id="fileUploader">
            <label htmlFor="fileUploaderField">Select up to three images at once to generate a hexaflexagon template.</label>
            <input id="fileUploaderField" type="file" multiple="true" onChange={this.onFilesChange} />
          </div>
          <hr/>
          <Hexaflexagon images={this.state.fileUrls}/>
        </div>
      </div>
    );
  }
}

export default App;
