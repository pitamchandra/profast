import React from 'react';
import logo from '../../../assets/logo.png'
const ProFastLogo = () => {
    return (
        <div className='flex justify-end items-end'>
            <img src={logo} alt="" />
            <p className='font-bold text-3xl -ml-4'>Profast</p>
        </div>
    );
};

export default ProFastLogo;