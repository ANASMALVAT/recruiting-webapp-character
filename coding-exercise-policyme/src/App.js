import logo from './logo.svg';
import Attribute from './components/attributes';
import Class from './components/class';
import Skill from './components/skill';
import './App.css';

function App() {
  return (
    <div className="App flex gap-2 justify-center ">
       <Attribute/>
       <Class/>
       <Skill/>
    </div>
  );
}

export default App;
