/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <div className=''>
           <NavLink  to={to}  className={ ({ isActive}) =>
     isActive ? "active"   : "" }>
            {children}
            </NavLink> 
        </div>
    );
};

export default ActiveLink;