//import React, { useState } from 'react';
import { toast } from 'react-toastify';



const TaskStatus = ({rightArea,resolve,setResolve,InProgress,setInProgress,PassFunction,taskDone,setTaskDone}) => {
    //console.log(taskDone);
    const handleTrash=(data)=>{
        //console.log(data);
        const TrashItems=taskDone.filter(dta=>dta.id!==data.id);
        setTaskDone(TrashItems);
        

    }

    const handleresolve=(dd)=>{
    
        setResolve(resolve+1);
        if(InProgress==0){
            return;
        }
        setInProgress(InProgress-1);
        toast.success("task has been completed");
        PassFunction(dd); 

        
       
    }
  
    return (
  <>
    {rightArea.length === 0 ? (
      <div className='bg-white shadow p-5 my-3 rounded-2xl font-bold text-center'>
        <h2>No more task</h2>
        <h2>Click on a card to start working</h2>
      </div>
    ) : (
      <div className='shadow rounded-2xl p-2 bg-white'>
        {rightArea.map(displayData => (
          <div className='bg-gray-200 shadow p-3 my-3 rounded-2xl' key={displayData.id}>
            <div className='flex flex-col text-center'>
              <h2 className='mb-3 font-bold'>{displayData.title}</h2>
              <button
                onClick={() => {
                  handleresolve(displayData);
                  
                  displayData={displayData};
                  
                }}
                className='btn btn-success rounded-2xl text-white'
              >
                Complete
              </button>
            </div>
          </div>
        ))}
      </div>
    )}

    {taskDone.length > 0 ? (
      taskDone.map(data => (
        <div className='shadow rounded-2xl p-2 bg-white mt-5' key={data.id}>
          <h2 className='font-bold'>{data.title}</h2>
          <div className='flex justify-between items-center'>
            <p className='text-green-600 m-1'>
              <i className='fa-solid fa-check'></i> Solved the Problem
            </p>
            <span onClick={() => handleTrash(data)}>
              <i className='fa-solid fa-trash'></i>
            </span>
          </div>
        </div>
      ))
    ) : (
      <p className='text-center font-bold my-5'>Practise & Send us Problems</p>
    )}
  </>

);
};

export default TaskStatus;