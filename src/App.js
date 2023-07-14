import React from 'react';
import './App.css';
import NavigationPanel from './NavigationPanel';
import NavigationButton from './NavigationButton';
import ContentPanel from './ContentPanel';
import DashboardPage from './DashboardPage';
import ConfigurationPage from './ConfigurationPage';
import AboutPage from './AboutPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationPanel>
          <NavigationButton text="Dashboard" to="/dashboard"/>
          <NavigationButton text="Configuration" to="/configuration"/>
          <NavigationButton text="About" to="/about" />
        </NavigationPanel>
        <ContentPanel>
          <Routes>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/configuration' element={<ConfigurationPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </ContentPanel>
      </div>
    </Router>
  );
}

export default App;
