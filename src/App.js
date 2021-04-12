import logo from './logo.svg';

import Contact from './components/Contact/Contact'

import SwingExample from './components/Test/Test'

import 'primereact/resources/themes/saga-purple/theme.css';
import './App.css';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Home></Home>
      </header>
      <About></About>
      <Resume></Resume>
      <br />
      <br />
      <SwingExample></SwingExample>
      <Contact></Contact>
    </div>
  );
}

export default App;
