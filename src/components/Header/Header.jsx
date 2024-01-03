/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'
import ActiveLink from '../ActiveLink/ActiveLink';



const Header = () => {
    const [open,setOpen] =useState(false)
    return (
       <div >
        
        <div>

<div onClick={() => setOpen(!open)} className='md:hidden'>
    <span>
        {open === true ? <XMarkIcon className="h-6 w-6 text-purple-500" />
            : <Bars3Icon className="h-6 w-6 text-purple-500" />}
    </span>


</div>
        </div>
        <div className={`text-2xl absolute  bg-slate-400 md:flex py-2 px-12 gap-4 font-sans md:static duration-500   ${open ? 'top-6' : '-top-36'}`}>
           
            
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/meals'>Meals</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>
            <ActiveLink to='/about'>About</ActiveLink>
            
          
        </div>
       </div>
    );
};

export default Header;