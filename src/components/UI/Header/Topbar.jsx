
import { Link } from 'react-router-dom'
// import { IoSunny } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import DarkModeToggle from '../../Layouts/DarkModeToggle';

const Topbar = () => {
    return (
        <>
            <div className='bg-gray-900 dark:bg-gray-800 w-ful h-[38px] flex items-center justify-center box-border' >
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-[1200px] w-full px-4'>
                    <div className='flex items-center rtl:space-x-reverse w-full'> 
                        <div className='flex items-center text-[12px]'>
                            <span className='pr-4 text-[#ccced2]'>
                                <Link to="" className='hover:text-white'> Skip to main content </Link>
                            </span>
                            <div className='flex text-[16px] visibility items-center'>
                                <div className='flex items-center pl-3 pr-3'>
                                    <ul className='flex list-none gap-[15px] text-[#ccced2] '>
                                        <li>
                                            <Link className='text-[12px] hover:text-white' to="">A-</Link>
                                        </li>
                                        <li>
                                            <Link className='text-[12px] hover:text-white' to="">A</Link>
                                        </li>
                                        <li>
                                            <Link className='text-[12px] hover:text-white' to="">A+</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex text-[16px] visibility items-center'>
                                <div className='flex items-center  text-[12px]'>
                                    <span className='text-[#ccced2] hover:text-white'>
                                        {/* <button className='flex items-center justify-center w-[40px] h-[24px] cursor-pointer'>
                                            <IoSunny fontSize={16} className='inline' />
                                        </button> */}
                                        <DarkModeToggle/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='flex ml-auto text-[#ccced2] items-center text-[12px] h-[24px]'>
                            <span className='inline-flex items-center justify-center pl-2 pr-2 hover:text-white'>
                                <BiSupport fontSize={12} className='mr-1 hover:text-white' /> Support
                            </span>
                            <div className='flex text-[16px] visibility items-center hover:text-white '>
                                <span className='text-[12px] pr-2 pl-2'> Calculator
                                    <RxCaretDown fontSize={16} className='inline hover:text-white' />
                                </span>
                            </div>
                            <div className='flex text-[16px] visibility items-center pl-2'>
                                <span className='text-[12px] hover:text-white mr-2'> Persoan Banking
                                    <LuSquareArrowOutUpRight fontSize={16} className='inline hover:text-white ml-1' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar;