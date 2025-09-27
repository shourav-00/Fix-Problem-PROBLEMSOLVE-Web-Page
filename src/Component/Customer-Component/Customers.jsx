//import React, { use } from 'react';
import Customer from './Customer';



const Customers =({InProgress,setInProgress,rightArea,allCard,setAllCard,setRightArea})=>{
    
    //console.log(getData);
    return (
        <>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8 min-h-[300px]  auto-rows-min'>
             
        {
            allCard.map((singleData, index) => (
            <Customer 
                key={singleData.id || index} 
                singleData={singleData} 
                InProgress={InProgress} 
                setInProgress={setInProgress}  
                rightArea={rightArea} 
                setRightArea={setRightArea} 
                allCard={allCard} 
                setAllCard={setAllCard} 
            />
            ))
            
            
        }
       
        
        
        </div>
         
        </>
    );

};

export default Customers;