import { Link } from "react-router-dom";
import Marquee from "../../components/UI/Header/Marquee";


export const Banner = () => {

    return (
        <>
            <div className="bg-gradient-to-tr from-[#184b00] to-[#369133da] dark:bg-gradient-to-tr dark:from-gray-800 dark:to-gray-600 shadow-xl w-ful h-[30px] flex text-[#fff]">
                <div className="max-w-[1200px] w-[100%] flex mx-auto items-center">
                    <div className="flex w-full pt-[5px] h-[30px] opacity-[1] font-roboto text-[14px] pl-2 pr-2">
                        <Marquee>
                            <div>Nofino Rural Fiaince Private Limited - </div>
                            <div>CIN - U64990AS2023PTC025316  - </div>
                            <div>Mandia Mandia Barpeta Assam - 781308..</div>
                        </Marquee>
                    </div>
                </div>
            </div>
            <div id="main-banner-component-html" className="main-banner">
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider1.jpg" className="d-block w-100" alt="Slider1" />
                            <div className="carousel-caption ">
                                <div className="w-full items-center">
                                    <div className="flex flex-wrap justify-between items-center max-w-[1200px] ">
                                        <div className="font-roboto items-center justify-center">
                                            <div className="animate-fadeInDown delay-[6000]">
                                                <p className="lg:text-[30px] xl:text-[30px] text-[20px] pt-4 pb-3 text-[#ffffffb4] md:text-[23px]">
                                                    Simple & Secure Payment Process </p>
                                            </div>
                                            <div className="animate-fadeInDown">
                                                <h2 className="lg:text-[60px] xl:text-[60px] text-[36px] font-bold capitalize text-gray-950 pb-3 md:text-[45px] ">
                                                    Connecting Your Loan Needs </h2>
                                            </div>
                                            <div className="flex font-semibold list-none text-[16px] sliderBtn">                                                
                                                <Link to="/apply-from" className="group relative inline-flex h-[calc(48px+8px)]  items-center justify-center rounded-full bg-green-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
                                                    <span className="z-10 pr-2 text-white">Apply Loan</span>
                                                    <div className="absolute right-1 inline-flex h-12 w-12 items-center hover:text-white justify-end rounded-full bg-green-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                                                        <div className="mr-3.5 flex items-center justify-center">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-50">
                                                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider2.jpg" className="d-block w-100" alt="Slider2" />
                            <div className="carousel-caption ">
                                <div className="w-full items-center">
                                    <div className="max-w-[1200px]">
                                        <div className="font-roboto items-center justify-center">
                                            <div className="animate-fadeInDown delay-[200]">
                                                <p className="lg:text-[30px] xl:text-[30px] text-[20px] pt-4 pb-3 text-[#ffffffb4] md:text-[23px]">
                                                    Simple & Secure Payment Process </p>
                                            </div>
                                            <div className="animate-fadeInDown">
                                                <h2 className="lg:text-[60px] xl:text-[60px] text-[36px] font-bold capitalize text-gray-950 pb-3 md:text-[45px] ">
                                                    Connecting Gold Loan Needs </h2>
                                            </div>
                                            <div className="flex font-semibold list-none text-[16px] sliderBtn">
                                                <Link to="/apply-from" className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-green-950 py-1 pl-6 pr-14 font-medium text-neutral-50">
                                                    <span className="z-10 pr-2 text-white">Apply Loan</span>
                                                    <div className="absolute right-1 inline-flex h-12 w-12 items-center hover:text-white justify-end rounded-full bg-green-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                                                        <div className="mr-3.5 flex items-center justify-center">
                                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-50">
                                                                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider3.jpg" className="d-block w-100" alt="Slider3" />
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider3.jpg" className="d-block w-100" alt="Slider3" />
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider3.jpg" className="d-block w-100" alt="Slider3" />
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider3.jpg" className="d-block w-100" alt="Slider3" />
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider3.jpg" className="d-block w-100" alt="Slider3" />
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider3.jpg" className="d-block w-100" alt="Slider3" />
                        </div>
                        <div className="carousel-item" data-bs-interval="6000">
                            <img src="assets/images/carousel/slider3.jpg" className="d-block w-100" alt="Slider3" />
                        </div>
                    </div>
                    <div className="carousel-indicators" >
                        <button aria-label="previous" type="button" data-bs-target="#myCarousel" data-bs-slide="prev"
                            className="carousel-control-prev">
                            <span className="carousel-control-prev-icon"></span>
                        </button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 0" data-bs-slide-to="0" className="active" aria-current="true" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 1" data-bs-slide-to="1" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 2" data-bs-slide-to="2" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 3" data-bs-slide-to="3" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 4" data-bs-slide-to="4" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 5" data-bs-slide-to="5" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 6" data-bs-slide-to="6" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 7" data-bs-slide-to="7" ></button>
                        <button type="button" data-bs-target="#myCarousel" aria-label="carousel button 8" data-bs-slide-to="8" ></button>
                        <button aria-label="next" type="button" data-bs-target="#myCarousel" data-bs-slide="next"
                            className="carousel-control-next">
                            <span className="carousel-control-next-icon"></span>
                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Banner;