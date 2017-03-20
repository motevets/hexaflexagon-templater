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
      fileUrls: this.state.fileUrls.concat(newFileUrls)
    });
  }

  removeImage = (index) => {
    const fileUrlsCopy = this.state.fileUrls.slice();
    fileUrlsCopy.splice(index, 1);
    this.setState({
      fileUrls: fileUrlsCopy
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
            { this.state.fileUrls.map((fileUrl, i) =>
              <div
                key={i}
                className="hexagonPreview"
                style={{backgroundImage: `url(${fileUrl})`}}
              >
                <div className="cross" onClick={this.removeImage.bind(this, i)}>×</div>
              </div>
            )}
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
