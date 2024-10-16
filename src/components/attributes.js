import React, { useState, useEffect } from 'react';
import { ATTRIBUTE_LIST, SKILL_LIST } from "../consts";
import ClassAttribute from './classAttribute';

const Attribute = () => {
  const getInitialAttributes = () => {
    localStorage.clear()
    const storedAttributes = localStorage.getItem('attributes');
    if (storedAttributes) {
      return JSON.parse(storedAttributes);
    }
    return ATTRIBUTE_LIST.map((attr) => ({ name: attr, value: 10 }));
  };

  const getInitialModifiers = () => {
    const storedModifiers = localStorage.getItem('skillModifiers');
    if (storedModifiers) {
      return JSON.parse(storedModifiers);
    }
    return SKILL_LIST.map((skill) => ({ name: skill.name, modifier: 0, attributeModifier: skill.attributeModifier }));
  };

  const [attributes, setAttributes] = useState(getInitialAttributes);
  const [skills, setSkills] = useState(getInitialModifiers);

  useEffect(() => {
    localStorage.setItem('attributes', JSON.stringify(attributes));
  }, [attributes]);

  useEffect(() => {
    localStorage.setItem('skillModifiers', JSON.stringify(skills));
  }, [skills]);

  const getTotalValue = () => {
    return attributes.reduce((total, attr) => total + attr.value, 0);
  };


  const updateSkillModifiers = () => {
    const updatedSkills = skills.map((skil) => {
      const associatedAttr = attributes.find(attr => skil.attributeModifier === attr.name);
      let curval = 0;
  
      if (associatedAttr && associatedAttr.value >= 10) {
        curval = Math.floor(associatedAttr.value - 10) + 1;
      }
        return {
        ...skil,
        modifier: skil.modifier + curval 
      };
    });
    setSkills(updatedSkills); 
  };
  


  const handleIncrement = (index) => {
    const totalValue = getTotalValue();
    if (totalValue >= 70) {
      alert("Max total attribute value cannot exceed 70.");
      return;
    }


    if (attributes[index].value < 20) {
      const updatedAttributes = [...attributes];
      updatedAttributes[index].value += 1;
      setAttributes(updatedAttributes);
      updateSkillModifiers(); 
    }
  };

  const handleDecrement = (index) => {
    const updatedAttributes = [...attributes];
    if (updatedAttributes[index].value > 0) {
      updatedAttributes[index].value -= 1;
      setAttributes(updatedAttributes);
      updateSkillModifiers();  
    }
  };

 

  return (
    <div className="p-4 space-y-4 flex-row">
      <h2 className="text-xl font-bold">Attribute List</h2>
      {attributes.map((attr, index) => (
        <div
          key={attr.name}
          className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
        >
          <span className="w-32 font-medium">{attr.name}</span>
          <div className="flex items-center space-x-4">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => handleDecrement(index)}
              disabled={attr.value <= 0}
            >
              -
            </button>
            <span className="w-8 text-center text-lg">{attr.value}</span>
            <button
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => handleIncrement(index)}
              disabled={attr.value >= 20}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <ClassAttribute attributes={attributes} />
    </div>
  );
};

export default Attribute;
