
import './App.css'
import Header from './components/Header';
import Homes from './components/home/Homes';
import About from './components/about/About';
import Skill from './components/skills/Skill';
import Portfolio from './components/protfolio/Portfolio';
import Contacts from './components/contact/Contacts';

function App() {
  return (
    <div className="App">
    <Header/>
    <Homes/>
    <About/>
    <Skill/>
    <Portfolio/>
    <Contacts/>
    </div>
  );
}

export default App;
