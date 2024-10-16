import React from 'react';
import { CLASS_LIST } from "../consts";
import { useSelector } from "react-redux";

const ClassAttribute = ({ attributes }) => {
    
  let currentClass = useSelector((state) => state.classSlice.CurrentClass);
  const classAttributes = CLASS_LIST[currentClass];
  const filteredAttributes = attributes.filter(attr => classAttributes && classAttributes.hasOwnProperty(attr.name));


  return (
    currentClass && classAttributes && (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-bold">{currentClass} Attribute List</h2>
        {filteredAttributes.map((attr) => (
          <div
            key={attr.name}
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
          >
            <span className="w-32 font-medium">{attr.name}</span>
            <span className="w-8 text-center text-lg">{attr.value}</span>
          </div>
        ))}
      </div>
    )
  );
};

export default ClassAttribute;
