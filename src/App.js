import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import {projects as Projects} from './components/Projects'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>}>
            <Route path=':id' element={<ProjectDetails animate={true}/>}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
