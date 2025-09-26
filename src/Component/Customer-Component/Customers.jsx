//import React, { use } from 'react';
import Customer from './Customer';



const Customers =({InProgress,setInProgress,rightArea,allCard,setAllCard,setRightArea})=>{
    
    //console.log(getData);
    return (
        <>
        <div className='grid grid-cols-2 gap-8 h-full'>
             
        {
            allCard.map (singleData=><Customer singleData={singleData} InProgress={InProgress} setInProgress={setInProgress}  rightArea={rightArea} setRightArea={setRightArea} allCard={allCard} setAllCard={setAllCard} ></Customer>)
            
            
        }
       
        
        
        </div>
         
        </>
    );

};

export default Customers;