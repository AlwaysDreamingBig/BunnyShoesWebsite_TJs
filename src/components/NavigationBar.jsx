import React, { useState, useEffect, useRef } from 'react';
import { headerMyLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const NavigationBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

     {/** set the visibility of the mobile menu to True or false */}
        const handleClick = () => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            console.log(isMobileMenuOpen);
        };

    {/**Retract the mobile menu when clicking outside of the element with the id MobileMenu :
        *it utilize the useRef hook to create a reference to the mobile menu element
        *then listen for clicks on the document body.
        *If the click occurs outside of the mobile menu you can close the menu. */}

        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);


     {/** UI*/}
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerMyLogo} alt="Logo" width={130} height={30} />
                </a>
                
                 {/* This bar icon is only visible on big screen */}
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                

                 {/* This bar icon is invisible on big screen but visible on smaller one (when the links are not visible) */}
                <div className='hidden max-lg:block rounded-full p-2 hover:bg-gray-200 transition-colors duration-200 cursor-pointer' 
                    id='MenuBar' 
                    onClick={handleClick} 
                    aria-label="Toggle menu"
                    role="button"
                >
                    <img src={hamburger} alt="Menu icon" width={25} height={25} />
                </div>
            </nav>

            
             {/* Mobile menu, appears when clicing on the Menu bar on small screens*/}
            {isMobileMenuOpen && (
                <div ref={mobileMenuRef} 
                    className='absolute top-full left-0 w-full bg-white shadow-lg z-20 max-lg:block hidden ' 
                >
                    <ul className='flex flex-col items-center gap-4 py-4'>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default NavigationBar;
