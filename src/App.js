import React from 'react';
import './App.css';
import NavigationPanel from './NavigationPanel';
import NavigationButton from './NavigationButton';
import ContentPanel from './ContentPanel';

function App() {
  return (
    <div className="app">
      <NavigationPanel>
        <NavigationButton text="Dashboard" />
        <NavigationButton text="Configuration" />
        <NavigationButton text="Angry jeff bezoz" />
      </NavigationPanel>
      <ContentPanel>
      </ContentPanel>
    </div>
  );
}

export default App;
