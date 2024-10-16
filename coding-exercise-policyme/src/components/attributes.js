import React, { useState,useEffect } from 'react';
import { ATTRIBUTE_LIST } from "../consts";
import ClassAttribute from './classAttribute';

const Attribute = () => {

  const getInitialAttributes = () => {
    const storedAttributes = localStorage.getItem('attributes');
    if (storedAttributes) {
      return JSON.parse(storedAttributes);
    }
    return ATTRIBUTE_LIST.map((attr) => ({ name: attr, value: 0 }));
  };

  const [attributes, setAttributes] = React.useState(getInitialAttributes);

  useEffect(() => {
    // Store attributes in local storage whenever they change
    localStorage.setItem('attributes', JSON.stringify(attributes));
  }, [attributes]);

  const handleIncrement = (index) => {
    const updatedAttributes = [...attributes];
    updatedAttributes[index].value += 1;
    setAttributes(updatedAttributes);
  };

  const handleDecrement = (index) => {
    const updatedAttributes = [...attributes];
    if (updatedAttributes[index].value > 0) {
      updatedAttributes[index].value -= 1;
      setAttributes(updatedAttributes);
    }
  };

  return (
    <div className="p-4 space-y-4 flex-row ">
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
