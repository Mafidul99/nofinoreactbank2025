import { RxCaretDown } from "react-icons/rx";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const LoanSerDropDown = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const calLinks = [
        {
            name: "FD Calculator",
            url: "/fd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
        {
            name: "RD Calculator",
            url: "/rd-calculator"

        },
    ]

    return (
        <>
            <div className="group relative inline-block text-left">
                <div>
                    
                    <button onClick={toggleDropdown} 
                        onMouseEnter={() => setIsOpen(true)}
                        className="inline-flex justify-center menu-hover font-roboto w-full hover:text-gray-800" >
                             Loan Services
                        <RxCaretDown fontSize={16} className='inline hover:text-gray-800' />
                    </button>
                </div>

                {isOpen && (
                    <div className="origin-top-right absolute right-0  mt-4 w-[450px] z-50 rounded-md shadow-lg bg-[#fff] ring-1 ring-black ring-opacity-5
                    focus:outline-none dark:bg-gray-700 group-hover:block transition duration-150 ease-in-out" role="menu"  onMouseLeave={() => setIsOpen(false)}>
                        <div className="py-1 " role="none">                            
                            {calLinks.map((calLink, index) => {
                                return (
                                    <Link to={calLink.url}
                                        className=" inline-grid px-4 py-[15px] font-roboto text-[15px] text-gray-700 dark:text-white dark:hover:text-green-500
                                         hover:text-green-500" role="menuitem" >
                                        {calLink.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default LoanSerDropDown;