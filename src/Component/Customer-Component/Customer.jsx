import React, { useState } from 'react';
//import { toast } from 'react-toastify';
import Swal from "sweetalert2";






const Customer = ({singleData,InProgress,setInProgress,rightArea,setRightArea,}) => {
    //console.log(rightArea);
    const [click,setClick]=useState(true);
    const [SysStatus,setSysStatus]=useState(false);
    console.log(singleData);
    //setAllCard(singleData);
    
     //RemoveCard(singleData);

    const Cliclable=()=>{
        //setAllCard(singleData) ; 
         
        if(!click) return;
        setClick(false);
       
        
        setInProgress(InProgress+1);
        const spreadArray=[...rightArea,singleData];
        setRightArea(spreadArray);
       
       //toast('hi');
        Swal.fire({
        title: 'Task Started!',
        text: `You started working on "${singleData.title}"`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });
        setSysStatus(true);
        

        
      
          

    }
    //const [statusTask,SetStatusTask]=useState(singleData.status);
    return (
        <>
        
            <div  onClick={()=>Cliclable()} className='max-w-6xl mx-auto  rounded-2xl p-5 bg-white '>

            <div className='flex justify-between items-center '>
            <h2 className='font-bold my-5 '>
               {singleData.title}</h2>
            
            {
                (SysStatus===false)
                 ? (
                    <div className='bg-[#B9F8CF] rounded-xl p-2 flex justify-center items-center gap-2'>
                      <img  src="https://i.ibb.co.com/jvqCGPzq/Ellipse-22.png" alt="" />  
                      <h2>Open</h2>
                    </div>
                ) :(
                    <div className='bg-[#F8F3B9] rounded-xl p-2 flex justify-center items-center gap-2'>
                      
                      <div className=''>
                       {/* <span className='flex flex-col justify-center items-center'> 

                        <i class="fa-solid fa-circle-question"></i></span> */}
                        
                      <h2>In-Progress</h2>
                      </div>
                    </div>
                )                                      
            
            }
            
            
            </div>
            
            <p className='border-t-2 border-t-gray-200 pt-4'>{singleData.
            description}</p>
            <div className='flex justify-between items-center py-2 sm:mt-3'>
                <div className='flex justify-around items-center gap-2'>
                <p className='text-gray-600'>#<span className='font-bold'>{singleData.id}</span></p>
                {
          
                          singleData.priority=='High' ? (
                            <p className='text-red-600 font-bold'>{singleData.priority}</p>)
                            
                         : singleData.priority=='Medium' ? (
                            <p className='text-yellow-600 font-bold'>{singleData.priority}</p>
                        ) :singleData.priority=='Low' ? 
                            (<p className='text-blue-600 font-bold'>{singleData.priority}</p>):null
                        
                }
                    
                </div>
                <div className='flex justify-around items-center gap-2'>
                    {/* <i class="fa-solid fa-calendar"></i> */}
                <p className='text-gray-600 font-bold'>{singleData.createdAt}</p>
                </div>
            </div>

        </div>
        
        </>
    );

};

export default Customer;