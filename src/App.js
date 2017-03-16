import React, { Component } from 'react';
import './App.css';
import Hexaflexagon from './Hexaflexagon';

class App extends Component {

  state = {
    fileUrls: []
  }

  onFilesChange = (e) => {
    console.log(e)
    console.log(e.target)
    console.log(e.target.files)
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
          <h2>Hexaflexagon</h2>
        </div>
        <div className="App-body">
          <input type="file" multiple="true" onChange={this.onFilesChange} />
          <Hexaflexagon images={this.state.fileUrls}/>
        </div>
      </div>
    );
  }
}

export default App;
