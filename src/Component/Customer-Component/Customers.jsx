import React, { use } from 'react';
import Customer from './Customer';



const Customers =({JsonData,InProgress,setInProgress,rightArea,setRightArea,setAllCard, RemoveCard,allCard}) => {
    const getData=use(JsonData);
    //console.log(getData);
    return (
        <>
        <div className='grid grid-cols-2 gap-8 '>
             
        {
            getData.map (singleData=><Customer singleData={singleData} InProgress={InProgress} setInProgress={setInProgress}  rightArea={rightArea} setRightArea={setRightArea} allCard={allCard} setAllCard={setAllCard} RemoveCard={RemoveCard}></Customer>)
        }
        
        </div>
        </>
    );
};

export default Customers;