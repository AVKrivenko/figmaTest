
import './App.css';
import Foother from './component/Foother';
import Section from './component/Section';
import Header from './component/header';

function App() {
  return (
    <div className='App' >
    <div className="container"> 
    <Header/>
    <Section/>
    <Foother/>
    </div>
    </div>
  );
}

export default App;
