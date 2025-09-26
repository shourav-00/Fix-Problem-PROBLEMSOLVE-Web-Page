import React from 'react';
import FirstPic from '../assets/vector1.png'
import SecPic from '../assets/vec2.png'



console.log(SecPic)
const Header = ({InProgress,resolve}) => {
    //console.log(resolve)
    //console.log(SecPic)

    return (
    <>
    
        {/* Nav Section --------------- */}

        <nav className='py-2 my-2 bg-white'>
            <section  className='max-w-6xl mx-auto flex justify-between items-center gap-6 sm:gap-8'>
            <h2 className='text-2xl font-bold ml-2 sm:ml-0'>Mathly</h2>
            <div>
                <ul className='flex justify-between items-center mr-2 sm:mr-0 gap-6 sm:gap-8 text-[ #000000E6)] flex-wrap sm:flex-row'>
                    <li><a href="">Home</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Changelog</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Download</a></li>
                    <li><a href="">Contact</a></li>
                   
                    <button className='p-2 text-white rounded-[4px] bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)]'><span>+ </span><a href="">New Ticket</a></button>
                </ul>
            </div>
            </section>
        </nav>

        {/* Image Section --------- */}

        <section className='bg-[#E9E9E9]' >
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 px-5 gap-4 mt-[20px] text-white text-2xl sm:text-4xl justify-center items-center py-4'>
            <div className='bg-[linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)] col-span-1 h-[150px] sm:h-[200px] flex flex-col bg-[#632EE3] justify-center items-center rounded-2xl' >
                  <div className='bg-contain bg-no-repeat flex flex-col justify-center items-center h-full w-full ' style={{
                   backgroundImage:`url(${FirstPic}),url(${SecPic})`,
                   backgroundPosition:'left bottom,right bottom',
                   backgroundSize: 'contain, contain',
      
                }}>
                    <h2 className=''>In-Progress</h2>
                    <h2 className='text-3xl sm:text-5xl mt-2'>{InProgress}</h2>
                </div> 
            

            
            </div>
            <div className=' bg-[linear-gradient(90.00deg,_#54cf68,_#00827a_100%)] col-span-1 h-[150px] sm:h-[200px] flex flex-col justify-center items-center rounded-2xl'>
             <div className='h-full w-full bg-contain bg-no-repeat text-center flex flex-col justify-center items-center' 
             style={{
                 backgroundImage:`url(${FirstPic}), url(${SecPic})`,
                  backgroundPosition:'left bottom,right bottom',
            }}
             >
                <h2>Resolved</h2>
                <h2 className='text-3xl sm:text-5xl mt-2'>{resolve}</h2>
             </div>
            
            </div>
            </div>
        </section>
    </>
    );
};

export default Header;