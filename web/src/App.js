import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Routes
} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
  
}

export default App;
