import logo from './logo.svg';
import {useState} from "react"
import Attribute from './components/attributes';
import Class from './components/class';
import Skill from './components/skill';
import { ATTRIBUTE_LIST,SKILL_LIST } from './consts';
import './App.css';

function App() {
  const getInitialAttributes = () => {
    return ATTRIBUTE_LIST.map((attr) => ({ name: attr, value: 10 }));
  };
  const [attributes, setAttributes] = useState(getInitialAttributes);

  const getInitialModifiers = () => {
    return SKILL_LIST.map((skill) => ({
      name: skill.name,
      modifier: 0,
      attributeModifier: skill.attributeModifier,
    }));
  };
  const [skills, setSkills] = useState(getInitialModifiers);

  return (
    <div className="App flex gap-2 justify-center ">
       <Attribute attributes={attributes} setAttributes={setAttributes}/>
       <Class/>
       <Skill skills={skills} setSkills={setSkills} attributes={attributes}/>
    </div>
  );
}

export default App;
