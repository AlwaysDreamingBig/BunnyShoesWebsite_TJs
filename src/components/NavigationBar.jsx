import React from 'react';
import {headerMyLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants'

{/** max-lg ==> the maximum size of the screen is large (around 1024px) */}

const NavigationBar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerMyLogo}     alt="Logo"      width={130}     height={30} />
            </a>
            
            {/** This bar icon is only visible on big screen */}
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {/** Permet de retourner les differents items dans navLinks */}
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}     className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            
            {/** This bar icon is invisible on big screen but visible on smaller one (when the links are not visible) */}
            <div className='hidden max-lg:block'>
                <img src={hamburger} alt="Menu icon" width={25} height={25}/>
            </div>
        </nav>
    </header> )
}

export default NavigationBar