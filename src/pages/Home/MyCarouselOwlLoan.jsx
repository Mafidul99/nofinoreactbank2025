import { NavLink } from "react-router-dom";
import GoldLoanData from "../../api/goldLoanData.json";
import ProductLoanData from "../../api/productLoanData.json";
import BusinessLoanData from "../../api/businessLoanData.json";
import { HiArrowLongRight } from "react-icons/hi2";

const MyCarouselOwlLoan = () => {

    return (
        <>

            <section className="sliderGold">
                <div className="flex items-center justify-center w-full mt-4">
                    <div className="flex-wrap justify-between max-w-[1200px] w-full items-center">
                        <div className="flex w-[100%] items-center font-[500] font-roboto tracking-[2px] dark:bg-gray-700 bg-[#fff] h-auto border-[1px] border-gray-300 dark:border-0 shadow-xl rounded-[7px]">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#goldloan" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Gold Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#productLoan" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Product Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#businessLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Business Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#groupLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Group Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#personalLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Personal Loan</button>
                                    <button className="dark:text-white dark:hover:text-gray-800 nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#vehicleLoan" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Loan Against Vehicle</button>
                                </div>
                            </nav>
                        </div>
                        <div className="tab-content mt-4" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="goldloan" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="flex w-[100%] font-roboto mt-4">
                                    <div class="owl-carousel owl-theme grid-three-cols">
                                        {GoldLoanData.map((goldLoanData, index) => {
                                            const {
                                                id, loanType, interestRate, loanAmount,
                                                tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = goldLoanData;
                                            return (

                                                <div className="card w-full flex items-center dark:bg-gray-700" key={id}>
                                                    <div className="SliderImage">
                                                        <NavLink href="#">
                                                            <img src={image} alt="thumb" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="pt-0 tracking-[.9px] w-[100%]">
                                                        <div className="cardTitle">
                                                            <h2 className="font-roboto text-red-600 font-[600] dark:text-white text-[20px] uppercase ">
                                                                {loanType} </h2> <hr className="dark:text-[#D6D6D6]"/>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Interest Rate : </span>
                                                            <span className="text-green-400 text[12px]"> {interestRate}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Amount : </span>
                                                            <span className="text-green-400 text[12px]"> {loanAmount}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Tenure : </span>
                                                            <span className="text-green-400 text[12px]"> {tenure}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Features : </span>
                                                            <span className="text-green-400 text[12px]"> {features}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Eligibility : </span>
                                                            <span className="text-green-400 text[12px]"> {eligibility}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Loan Purpose : </span>
                                                            <span className="text-green-400 text[12px]"> {loanPurpose}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Processing Fee : </span>
                                                            <span className="text-green-400 text[12px]"> {processingFee}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] dark:text-white text-gray-500">Re Payment Modes : </span>
                                                            <span className="text-green-400 text[12px]"> {repaymentModes}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full items-center pt-3 pb-3 ml-9">
                                                        <div className="flex w-[33%] items-center  rounded-md bg-gradient-to-r from-green-600 from-10%  to-green-900 to-90%">
                                                                <div className="flex w-[130px] hover:bg-gradient-to-l from-green-600 from-10%  to-green-900 to-90% text-white font-roboto pt-2 pb-2 pl-3 pr-3 items-center rounded-md">
                                                                    <NavLink to="" className="flex w-full items-center text-white ">
                                                                        Read More
                                                                        <span className="inline items-center pl-[5px]"><HiArrowLongRight /></span>
                                                                    </NavLink>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show " id="productLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="flex w-[100%] font-roboto mt-4">
                                    <div class="owl-carousel owl-theme grid-three-cols">
                                        {ProductLoanData.map((prodLoanData, index) => {
                                            const {
                                                id, loanType, interestRate, loanAmount,
                                                tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = prodLoanData;
                                            return (

                                                <div className="card w-full flex items-center" key={id}>
                                                    <div className="SliderImage">
                                                        <NavLink href="#">
                                                            <img src={image} alt="thumb" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="pt-0 tracking-[.9px] w-[100%]">
                                                        <div className="cardTitle">
                                                            <h2 className="font-roboto text-red-600 font-[600] text-[20px] uppercase ">
                                                                {loanType} </h2> <hr />
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Interest Rate : </span>
                                                            <span className="text-green-400 text[12px]"> {interestRate}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Amount : </span>
                                                            <span className="text-green-400 text[12px]"> {loanAmount}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Tenure : </span>
                                                            <span className="text-green-400 text[12px]"> {tenure}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Features : </span>
                                                            <span className="text-green-400 text[12px]"> {features}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Eligibility : </span>
                                                            <span className="text-green-400 text[12px]"> {eligibility}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Purpose : </span>
                                                            <span className="text-green-400 text[12px]"> {loanPurpose}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Processing Fee : </span>
                                                            <span className="text-green-400 text[12px]"> {processingFee}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Re Payment Modes : </span>
                                                            <span className="text-green-400 text[12px]"> {repaymentModes}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full items-center pt-3 pb-3 ml-9">
                                                        <div className="flex w-[33%] items-center bg-slate-500 rounded-md">
                                                                <div className="flex w-[130px] hover:bg-purple-500 text-white font-roboto pt-2 pb-2 pl-3 pr-3 items-center rounded-md">
                                                                    <NavLink to="" className="flex w-full items-center text-white ">
                                                                        Read More
                                                                        <span className="inline items-center pl-[5px]"><HiArrowLongRight /></span>
                                                                    </NavLink>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show " id="businessLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="flex w-[100%] font-roboto mt-4">
                                    <div class="owl-carousel owl-theme grid-three-cols">
                                        {BusinessLoanData.map((businLoanData, index) => {
                                            const {
                                                id, loanType, interestRate, loanAmount,
                                                tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                            return (

                                                <div className="card w-full flex items-center" key={id}>
                                                    <div className="SliderImage">
                                                        <NavLink href="#">
                                                            <img src={image} alt="thumb" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="pt-0 tracking-[.9px] w-[100%]">
                                                        <div className="cardTitle">
                                                            <h2 className="font-roboto text-red-600 font-[600] text-[20px] uppercase ">
                                                                {loanType} </h2> <hr />
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Interest Rate : </span>
                                                            <span className="text-green-400 text[12px]"> {interestRate}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Amount : </span>
                                                            <span className="text-green-400 text[12px]"> {loanAmount}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Tenure : </span>
                                                            <span className="text-green-400 text[12px]"> {tenure}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Features : </span>
                                                            <span className="text-green-400 text[12px]"> {features}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Eligibility : </span>
                                                            <span className="text-green-400 text[12px]"> {eligibility}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Purpose : </span>
                                                            <span className="text-green-400 text[12px]"> {loanPurpose}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Processing Fee : </span>
                                                            <span className="text-green-400 text[12px]"> {processingFee}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Re Payment Modes : </span>
                                                            <span className="text-green-400 text[12px]"> {repaymentModes}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full items-center pt-3 pb-3 ml-9">
                                                        <div className="flex w-[33%] items-center bg-slate-500 rounded-md">
                                                                <div className="flex w-[130px] hover:bg-purple-500 text-white font-roboto pt-2 pb-2 pl-3 pr-3 items-center rounded-md">
                                                                    <NavLink to="" className="flex w-full items-center text-white ">
                                                                        Read More
                                                                        <span className="inline items-center pl-[5px]"><HiArrowLongRight /></span>
                                                                    </NavLink>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show " id="groupLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="flex w-[100%] font-roboto mt-4">
                                    <div class="owl-carousel owl-theme grid-three-cols">
                                        {BusinessLoanData.map((businLoanData, index) => {
                                            const {
                                                id, loanType, interestRate, loanAmount,
                                                tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                            return (

                                                <div className="card w-full flex items-center" key={id}>
                                                    <div className="SliderImage">
                                                        <NavLink href="#">
                                                            <img src={image} alt="thumb" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="pt-0 tracking-[.9px] w-[100%]">
                                                        <div className="cardTitle">
                                                            <h2 className="font-roboto text-red-600 font-[600] text-[20px] uppercase ">
                                                                {loanType} </h2> <hr />
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Interest Rate : </span>
                                                            <span className="text-green-400 text[12px]"> {interestRate}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Amount : </span>
                                                            <span className="text-green-400 text[12px]"> {loanAmount}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Tenure : </span>
                                                            <span className="text-green-400 text[12px]"> {tenure}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Features : </span>
                                                            <span className="text-green-400 text[12px]"> {features}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Eligibility : </span>
                                                            <span className="text-green-400 text[12px]"> {eligibility}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Purpose : </span>
                                                            <span className="text-green-400 text[12px]"> {loanPurpose}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Processing Fee : </span>
                                                            <span className="text-green-400 text[12px]"> {processingFee}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Re Payment Modes : </span>
                                                            <span className="text-green-400 text[12px]"> {repaymentModes}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full items-center pt-3 pb-3 ml-9">
                                                        <div className="flex w-[33%] items-center bg-slate-500 rounded-md">
                                                                <div className="flex w-[130px] hover:bg-purple-500 text-white font-roboto pt-2 pb-2 pl-3 pr-3 items-center rounded-md">
                                                                    <NavLink to="" className="flex w-full items-center text-white ">
                                                                        Read More
                                                                        <span className="inline items-center pl-[5px]"><HiArrowLongRight /></span>
                                                                    </NavLink>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show " id="personalLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="flex w-[100%] font-roboto mt-4">
                                    <div class="owl-carousel owl-theme grid-three-cols">
                                        {BusinessLoanData.map((businLoanData, index) => {
                                            const {
                                                id, loanType, interestRate, loanAmount,
                                                tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                            return (

                                                <div className="card w-full flex items-center" key={id}>
                                                    <div className="SliderImage">
                                                        <NavLink href="#">
                                                            <img src={image} alt="thumb" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="pt-0 tracking-[.9px] w-[100%]">
                                                        <div className="cardTitle">
                                                            <h2 className="font-roboto text-red-600 font-[600] text-[20px] uppercase ">
                                                                {loanType} </h2> <hr />
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Interest Rate : </span>
                                                            <span className="text-green-400 text[12px]"> {interestRate}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Amount : </span>
                                                            <span className="text-green-400 text[12px]"> {loanAmount}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Tenure : </span>
                                                            <span className="text-green-400 text[12px]"> {tenure}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Features : </span>
                                                            <span className="text-green-400 text[12px]"> {features}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Eligibility : </span>
                                                            <span className="text-green-400 text[12px]"> {eligibility}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Purpose : </span>
                                                            <span className="text-green-400 text[12px]"> {loanPurpose}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Processing Fee : </span>
                                                            <span className="text-green-400 text[12px]"> {processingFee}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Re Payment Modes : </span>
                                                            <span className="text-green-400 text[12px]"> {repaymentModes}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full items-center pt-3 pb-3 ml-9">
                                                        <div className="flex w-[33%] items-center bg-slate-500 rounded-md">
                                                                <div className="flex w-[130px] hover:bg-purple-500 text-white font-roboto pt-2 pb-2 pl-3 pr-3 items-center rounded-md">
                                                                    <NavLink to="" className="flex w-full items-center text-white ">
                                                                        Read More
                                                                        <span className="inline items-center pl-[5px]"><HiArrowLongRight /></span>
                                                                    </NavLink>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade show " id="vehicleLoan" role="tabpanel" aria-labelledby="nav-home-tab">
                                <div className="flex w-[100%] font-roboto mt-4">
                                    <div class="owl-carousel owl-theme grid-three-cols">
                                        {BusinessLoanData.map((businLoanData, index) => {
                                            const {
                                                id, loanType, interestRate, loanAmount,
                                                tenure, features, eligibility, loanPurpose, processingFee, repaymentModes, image } = businLoanData;
                                            return (

                                                <div className="card w-full flex items-center" key={id}>
                                                    <div className="SliderImage">
                                                        <NavLink href="#">
                                                            <img src={image} alt="thumb" />
                                                        </NavLink>
                                                    </div>
                                                    <div className="pt-0 tracking-[.9px] w-[100%]">
                                                        <div className="cardTitle">
                                                            <h2 className="font-roboto text-red-600 font-[600] text-[20px] uppercase ">
                                                                {loanType} </h2> <hr />
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Interest Rate : </span>
                                                            <span className="text-green-400 text[12px]"> {interestRate}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Amount : </span>
                                                            <span className="text-green-400 text[12px]"> {loanAmount}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Tenure : </span>
                                                            <span className="text-green-400 text[12px]"> {tenure}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Features : </span>
                                                            <span className="text-green-400 text[12px]"> {features}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Eligibility : </span>
                                                            <span className="text-green-400 text[12px]"> {eligibility}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Loan Purpose : </span>
                                                            <span className="text-green-400 text[12px]"> {loanPurpose}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Processing Fee : </span>
                                                            <span className="text-green-400 text[12px]"> {processingFee}</span>
                                                        </div>
                                                        <div className="font-roboto pl-7 pr-4 pt-1">
                                                            <span className="font-[600] text-[15px] text-gray-500">Re Payment Modes : </span>
                                                            <span className="text-green-400 text[12px]"> {repaymentModes}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full items-center pt-3 pb-3 ml-9">
                                                        <div className="flex w-[33%] items-center bg-slate-500 rounded-md">
                                                                <div className="flex w-[130px] hover:bg-purple-500 text-white font-roboto pt-2 pb-2 pl-3 pr-3 items-center rounded-md">
                                                                    <NavLink to="" className="flex w-full items-center text-white ">
                                                                        Read More
                                                                        <span className="inline items-center pl-[5px]"><HiArrowLongRight /></span>
                                                                    </NavLink>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    );
}
export default MyCarouselOwlLoan;



