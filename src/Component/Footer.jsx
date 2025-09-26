import React from 'react';
import imgO from '../assets/fi_145807.png'
import imgT from '../assets/fi_5968764.png'
import imgTh from '../assets/fi_5969020.png'
import imgF from '../assets/fi_6244710.png'

const Footer = () => {
    return (
        <section className='bg-black '>
        <div className='max-w-6xl mx-auto py-8'>
            <div className='text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 mx-5 mb-10'>
            <div className='col-span-3 sm:col-span-2 '>
                <h2 className='my-2 font-bold '>CS — Ticket System</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='col-span-1'>
                <h2 className='my-2 font-bold '>Company</h2>
                <h6 className='mb-2'>About Us</h6>
                <h6  className='mb-2'>Our Mission</h6>
                <h6  className='mb-2'>Contact Saled   </h6>
            </div>
            <div className='col-span-1'>
                <h2 className='my-2 font-bold '>Services</h2>
                <h6  className='mb-2'>Products & Services</h6>
                <h6  className='mb-2'>Customer Stories</h6>
                <h6  className='mb-2'>Download Apps</h6>
            </div>
            <div className='col-span-1'>
                <h2 className='my-2 font-bold '>Information</h2>
                <h6  className='mb-2'>Privacy Policy</h6>
                <h6  className='mb-2'>Terms & Conditions</h6>
                <h6  className='mb-2'>Join Us</h6>
            </div>
            <div className='col-span-1 w-10/11'>
                <h2 className='my-2 font-bold '>Social Links</h2>
                <div className='flex gap-3  items-center justify-center my-2'>
                    <img className='w-5 h-8' src={imgO} alt="" />
                    <h6  className='mb-2'>@CS — Ticket System</h6>
                </div>
                <div className='flex items-center justify-center my-2 gap-3'>
                      <img className='w-5 h-8 my-2' src={imgT} alt="" />
                    <h6  className='mb-2'>@CS — Ticket System</h6>
                </div>
                <div className='flex gap-3 my-2 items-center justify-center'>
                      <img className='w-5 h-8' src={imgTh} alt="" />
                    <h6 className='mb-2'>@CS — Ticket System</h6>
                </div>
                <div className='flex gap-3 my-2 items-center justify-center '>
                      <img className='w-5 h-8' src={imgF} alt="" />
                    <h6  className='mb-2'>@CS — Ticket System</h6>
                </div>
            </div>
            </div>
        </div>
        <footer className='text-white text-center py-4 border-t-gray-600 border-t-2 font-bold'>
            <h2>© 2025 CS — Ticket System. All rights reserved.</h2>
        </footer>
        </section>
    );
};

export default Footer;