import { Suspense, useState,  useEffect} from 'react';
import './App.css'
import Customers from './Component/Customer-Component/Customers';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from './Component/Footer'
import Header from './Component/Header'
import TaskStatus from './Component/TaskStatus';
import {ToastContainer} from 'react-toastify';



const JsonData=fetch('/public/JsonData.json')
.then(res=>res.json());




function App() {
  
   useEffect(() => {
    fetch('/public/JsonData.json')
      .then(res => res.json())
      .then(data => setAllCard(data));
  }, []);

  // Callback to receive data from child
  const collectSingleData = (data) => {
    setSelectedCards(prev => [...prev, data]);
    console.log("Received from Customer:", data);
  };
  const[InProgress,setInProgress]=useState(0);
  const [alldata,setAlldata]=useState([])
  const [allCard,setAllCard]=useState([])
  const [rightArea,setRightArea]=useState([]);
  const [resolve,setResolve]=useState(0);
  const [taskDone,setTaskDone]=useState([]);
  console.log(allCard);
  
  
  // const [SysStatus,setSysStatus]=useState('');
  //console.log(rightArea);
   
  
  const PassFunction=(RData)=>{
    //console.log(RData);
    const uidata=rightArea.filter((task=>task.id!==RData.id));
    //console.log(uidata);
    setRightArea(uidata);
    const confirmationTable=[...taskDone,RData];
    //console.log(confirmationTable);
    setTaskDone(confirmationTable);

    
  // remove from left side
  //setAllCard(prevAllCard => prevAllCard.filter(card => card.id !== RData.id));
  const newCARD=allCard.filter(data=>data.id!==RData.id);
  setAllCard(newCARD);

  //console.log(newCARD);
  //setAllCard(newCARD);
    
   
  }
  
  return (
    <>
    <Header InProgress={InProgress} resolve={resolve}></Header>


     <div className=' bg-[#E9E9E9]'>
        <div className=' max-w-6xl mx-auto flex justify-around items-center p-3 '>
            <h2 className='text-2xl font-bold' >Customer Tickets</h2>
            <h2 className='text-2xl font-bold'>Task Status</h2>
    </div>    
    </div>  

    

    <section className= 'bg-[#E9E9E9]'>
    <div className='grid grid-cols-3 gap-8 max-w-6xl mx-auto p-5 self-star'>
      <div className='grid col-span-2'>
        <Suspense fallback={
      <>
      <div className='flex justify-center items-center my-5'>
        <span class="loading loading-ball loading-xs"></span>
        <span class="loading loading-ball loading-sm"></span>
        <span class="loading loading-ball loading-md"></span>
        <span class="loading loading-ball loading-lg"></span>
        <span class="loading loading-ball loading-xl"></span>
      </div></>
    }>
    <Customers JsonData={JsonData} InProgress={InProgress} setInProgress={setInProgress} setAllCard={setAllCard} allCard={allCard} alldata={alldata} setAlldata={setAlldata}
    rightArea={rightArea} setRightArea={setRightArea} collectSingleData={collectSingleData}></Customers>
    </Suspense>  
        
      </div>
      <div className='grid col-span-1 mx-2 px-2 self-start'>
          <TaskStatus rightArea={rightArea} resolve={resolve} setResolve={setResolve} InProgress={InProgress} setInProgress={setInProgress} PassFunction={PassFunction} taskDone={taskDone} setTaskDone={setTaskDone}></TaskStatus>
      </div>
    </div>
    </section>



    <Footer></Footer>
         {/* <ToastContainer></ToastContainer> */}
    </>
  )
}

export default App
