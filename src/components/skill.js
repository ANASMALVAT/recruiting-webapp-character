import React, { useEffect , useState} from 'react';
import { SKILL_LIST } from "../consts";

const Skill = () => {
  const getInitialModifiers = () => {
    const storedModifiers = localStorage.getItem('skillModifiers');
    if (storedModifiers) {
      return JSON.parse(storedModifiers);
    }
    return SKILL_LIST.map((skill) => ({
      name: skill.name,
      modifier: 0,
      attributeModifier: skill.attributeModifier,
    }));


  };

  const [skills, setSkills] = useState(getInitialModifiers);

  useEffect(() => {
    localStorage.setItem('skillModifiers', JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'skillModifiers') {
        const newModifiers = JSON.parse(event.newValue);
        setSkills(skills => newModifiers || getInitialModifiers());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleIncrement = (index) => {
    const updatedSkills = [...skills];
    updatedSkills[index].modifier += 1;
    setSkills(updatedSkills);
  };

  const handleDecrement = (index) => {
    const updatedSkills = [...skills];
    if (updatedSkills[index].modifier > -5) {
      updatedSkills[index].modifier -= 1;
      setSkills(updatedSkills);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Skill Modifiers</h2>
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
        >
          <span className="w-48 font-medium">{skill.name}</span>
          <span className="w-32">{skill.modifier}</span>
          <div className="flex items-center space-x-4">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => handleDecrement(index)}
              disabled={skill.modifier <= -5}
            >
              -
            </button>
            <button
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => handleIncrement(index)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
