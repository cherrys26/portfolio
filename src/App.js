import { ScrollTop } from 'primereact/scrolltop'

import Contact from './components/Contact/Contact'
import 'primereact/resources/themes/saga-purple/theme.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

import React from 'react'
import Example from './components/Test/Test';

function App() {

  return (
    <div className="App">
      <ScrollTop threshold={300} className="custom-scrolltop" icon="pi pi-arrow-up" />
      <header className="App-header">
        <Home></Home>
      </header>
      <About></About>
      <Resume></Resume>
      <br />
      <br />
      <Contact></Contact>

      <Example></Example>
    </div >
  );
}

export default App;
