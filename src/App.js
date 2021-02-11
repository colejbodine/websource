import React, {Component} from 'react';
import SearchBox from './SearchBox'
import CardList from './CardList'
import {resources} from './resources'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      resources: resources,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const filteredResources = this.state.resources.filter(resource => {
      return resource.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="App">
          <header>
              <nav className="navbar navbar-dark">
                  <div className="container">
                      <a className="navbar-brand" href="https://www.google.com/">Websource</a>
                      <SearchBox searchChange={this.onSearchChange}/>
                  </div>
              </nav>
          </header>
          <div className="container">
            <CardList resources={filteredResources}/>
          </div>
      </div>
    );
  }
}

export default App;
