import React, { useEffect } from 'react';
import { CLASS_LIST } from "../consts";
import { useSelector,useDispatch } from "react-redux";
import { classChangeMethod } from '../redux/slice/classSlice';

const Class = () => {

  let dispatch = useDispatch();
  let notification =   useSelector((state) => state.classSlice.CurrentClass);
  useEffect(() => {
    console.log(notification)
  },[])
  
  const setClass = (className) => {
    if(notification == className){
      dispatch(classChangeMethod({CurrentClass:"" }));
    }
    else{
    dispatch(classChangeMethod({CurrentClass:className }));
    }
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Class List</h2>
      <div className="mt-2 space-y-2">
        {Object.keys(CLASS_LIST).map((className) => (
          <div
            key={className}
            className="p-4 border rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => setClass(className)} 
            >
            <h3 className="font-semibold">{className}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Class;