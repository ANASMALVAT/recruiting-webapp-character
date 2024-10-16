import React, { useEffect, useState } from 'react';

const Skill = ({ skills, setSkills, attributes }) => {

  useEffect(() => {
    localStorage.setItem('skillModifiers', JSON.stringify(skills));    
  }, [skills]);

  const getTotalModifiers = () => {
    return skills.reduce((total, skill) => total + skill.modifier, 0);
  };

  const handleIncrement = (index) => {
    const totalModifiers = getTotalModifiers();

    if (totalModifiers >= 18) {
      alert('Total value of skill modifiers cannot exceed 18');
      return;
    }

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
          <span className="w-24 font-medium">{skill.name}</span>
          <span className="w-20">{skill.modifier}</span>
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
          
          <h2 className="text-sm font-bold mr-2 ml-2">
            Modifier: {
             attributes.map((attr) => {
              if (attr.name === skill.attributeModifier) {
                const modifier = Math.max(-5, Math.floor((attr.value - 10) / 2));
                return <span key={attr.name}>{modifier}</span>;
              }
              return null;
            })
            }
          </h2>
          <h2 className="m-2 text-sm font-bold">Total Value</h2>
            {
              attributes.map((attr) => {
                if (attr.name === skill.attributeModifier) {
                  const modifier = Math.max(-5, Math.floor((attr.value - 10) / 2));
                  return <span key={attr.name}>{modifier + skill.modifier}</span>;
                }
              })
            }
        </div>
      ))}
    </div>
  );
};

export default Skill;
