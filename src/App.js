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
          <h2>HexaFlexaGo</h2>
          <p>The friendly hexaflexagon template generator</p>
        </div>
        <div className="App-body">
          <div id="fileUploader">
            <label htmlFor="fileUploaderField">Select up to <strong>three</strong> images at once</label>
            <input id="fileUploaderField" type="file" multiple="true" onChange={this.onFilesChange} />
          </div>
          <hr/>
          <Hexaflexagon images={this.state.fileUrls}/>
        </div>
        <div className="App-footer">
          <p>Made with love by <a href="http://katieconforti.com">Katie Conforti</a> and <a href="http://motevets.com">Tom Dunlap</a></p>
        </div>
      </div>
    );
  }
}

export default App;
