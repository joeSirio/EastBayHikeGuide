import React from 'react';
import './App.css';
import Landing from './landing';
import About from './About';
import HikeGuide from './HikeGuide';

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        nav area
      </header>
      <main className="content">
        <Landing />
        <About />
        <HikeGuide />
      </main>
    </div>
  );
}
