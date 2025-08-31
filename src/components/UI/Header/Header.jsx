import { Link, NavLink } from "react-router-dom";
import Topbar from "./Topbar";

import { FiMenu } from "react-icons/fi";
import { useState } from "react";


const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    }

    const links = [
        {
            name: "home",
            url:"/"

        },
        {
            name: "About Us",
            url:"/about"
        },
        {
            name: "Digital Solutions",
            url:"/digital-solutions"
        },
        {
            name: "Loan Service",
            url:"/loan-Service"
        },
        {
            name: "Accounts",
            url:"/accounts"
        },
        {
            name: "Cash Management Product",
            url:"/cash-managment-product"

        },
        
        {
            name: "Gold Loan Service",
             url:"/gold-loan-services"

        },
        {
            name: "Invesments Plan",
             url:"/invesments-plan"

        },
        {
            name: "Contact Us",
             url:"/contact"

        }
    ]

    return (
        <>
            <header className="sticky top-0 z-50 bg-[#fff]">
                <Topbar />

                <div className='p-[15px] h-[70px] w-full'>
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4">                        
                        <div className='w-[150px] '>
                            <Link to="/">
                                <img src="assets/images/logo/logo-dark1.png" className='w-[100%]' alt="MainLogo" />
                            </Link>
                        </div>

                        <div className='flex gap-3 ml-auto'>
                            <div className="flex ml-auto ">
                                <Link to="#_" className="relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-gray-600 border-2 border-green-600 rounded-full hover:text-white group hover:bg-gray-50">
                                    <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"></span>
                                    <span className="relative font-roboto text-[15px] font-[700]">Open Account</span>
                                </Link>
                            </div>
                            <div className="flex ml-auto">
                                <Link to="#_" className="relative inline-flex items-center justify-start py-2 overflow-hidden font-medium transition-all bg-green-500 px-7 rounded-xl group">
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-green-800 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-green-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white font-roboto text-[15px] font-[700]">Login Page</span>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                <nav className="bg-[#f1f3ff]  dark:bg-gray-700 shadow-xl w-full h-[50px] flex border-t-[1px] border-t-[#a8acd5] border-b-[1px] border-b-[#a8acd5] mt-2 items-center justify-center text-center">
                    <div className="flex flex-wrap justify-between items-center mx-auto w-full max-w-[1200px] px-4 md:text-[12px] md:leading-[15px] ">
                        <div className="justify-end ml-auto px-2 py-2 bg-gray-700 rounded-md mobileToggle dark:bg-slate-50 hover:bg-gray-300 ">
                            <button onClick={handleButtonToggle} className="items-center justify-center text-center">
                                <FiMenu size={25} className="items-center justify-center text-center dark:text-gray-900 text-[#fff] hover:text-gray-800" />
                            </button>
                        </div>
                        <div className="flex items-center menu-web">
                            <ul className="flex flex-row text-[14px]  dark:text-[#fff] font-roboto font-[500] capitalize mt-0 text-center justify-items-center justify-center">
                                {links.map((link, index) => {
                                    return (
                                        <li className="hover:bg-[#e7e7fc] items-center h-full text-center justify-items-center justify-center">
                                            <Link to={link.url} className="flex border-r-[1px] border-dashed border-r-[#d6d8ec] items-center px-[13px] py-[12px] hover:text-gray-800">
                                                {link.name}                                                
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={showMenu ? "mobile-menu" : "menu-web"}>
                            <div className="w-full lg:hidden xl:hidden mobile-menu" id="navbar-default">
                                <ul className="font-[700] text-[18px] items-start flex rtl:space-x-reverse flex-col p-4 lg:p-0 mt-6 border border-gray-100 rounded-lg
                                 bg-gray-50 lg:flex-row lg:space-x-8  lg:mt-0 md:border-0 lg:bg-white dark:bg-gray-800 md:dark:bg-gray-900
                                  dark:border-gray-700 capitalize">
                                    {links.map((link, index) => {
                                    return (
                                        <li>
                                            <NavLink to={link.url} className="block px-3 py-2 text-gray-700 rounded-sm lg:bg-transparent
                                            hover:text-green-700 md:p-0 dark:text-white dark:hover:text-green-400">
                                                {link.name}
                                            </NavLink>
                                        </li>
                                        );
                                    })}                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Header;