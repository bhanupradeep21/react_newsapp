import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

export default class App extends Component {
  // apiKey = process.env.REACT_APP_NEWS_API
  // apiKey = "your apikey"
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route exact path='/'  element={<News pageSize={20} key="general" apiKey={this.apiKey} country="in" category="general"/>}/>
            <Route exact path='/about' element={<News pageSize={20} key="general" apiKey={this.apiKey} country="in" category="general"/>}/>
            <Route exact path='/business' element={<News pageSize={20} key="business" apiKey={this.apiKey} country="in" category="business"/>}/>
            <Route exact path='/sports' element={<News pageSize={20} key="sports" apiKey={this.apiKey} country="in" category="sports"/>}/>
            <Route exact path='/entertainment' element={<News pageSize={20} key="entertainment" apiKey={this.apiKey} country="in" category="entertainment"/>}/>
            <Route exact path='/health' element={<News pageSize={20} country="in" key="health" apiKey={this.apiKey} category="health"/>}/>
            <Route exact path='/technology' element={<News pageSize={20} country="in" key="technology" apiKey={this.apiKey} category="technology"/>}/>
            <Route exact path='/science' element={<News pageSize={20} country="in" key="science" apiKey={this.apiKey} category="science"/>}/>
            <Route exact path='/general' element={<News pageSize={20} key="general" country="in" apiKey={this.apiKey} category="general"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

