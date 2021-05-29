import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import { Welcome } from "./components/welcome/Welcome";
import {SearchBar} from "./common/SearchBar/SearchBar";

function App() {
  return (
    <div className="main-content">
        <Router>
            <SearchBar/>
            <Welcome/>
        </Router>
    </div>
  );
}

export default App;
