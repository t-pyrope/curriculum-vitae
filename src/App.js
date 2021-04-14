import React from 'react';
import './styles/app.scss';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Line />
        <Skills />
        <Education />
        <Experience />
        <Contacts />
      </div>
    </div>
  );
}

const Line = () => {
  return (
    <div className="line" />
  );
};

export default App;
