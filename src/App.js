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
      <Header />
      <Line />
      <Skills />
      <Education />
      <Experience />
      <Contacts />
    </div>
  );
}

const Line = () => {
  return (
    <div className="line" />
  );
};

export default App;
