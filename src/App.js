import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import DiaryNotes from './components/hoc/DiaryNotes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar logotextBig={'DIARY APP'} logotextSmall={'Comment with no sense'} />
        <DiaryNotes/>
      </div>
    );
  }
}

export default App;
