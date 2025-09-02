import React from 'react'
// import FooterMenu from './Footer/FooterMenu';
import { TfiEmail } from "react-icons/tfi";
import { GiRotaryPhone } from "react-icons/gi";
import { RiMapPinLine } from "react-icons/ri";

// Social Icons
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footers = () => {

  const mainMenu = [
    {
      name: "home",
      url: "/"

    },
    {
      name: "About Us",
      url: "/about"

    },
    {
      name: "Digital Solutions",
      url: "/digital-solutions"

    },
    {
      name: "Loan Service",
      url: "/loan-Service"

    },
  ]

  const ourServices = [
    {
      name: "Gold Loan Service",
      url: "/gold-loan-services"

    },
    {
      name: "Invesments Plan",
      url: "/invesments-plan"

    },
    {
      name: "Cash Management Product",
      url: "/cash-managment-product"

    },
  ]

  const helpLink = [
    {
      name: "faq",
      url: "/faq"

    },
    {
      name: "support",
      url: "/support"

    },
  ]

  const contUs = [
    {
      email: "support@nofinofinance.com",
      url: "mailto:support@nofinofinance.com",
      icon: <TfiEmail />

    },
    {
      email: "",
      phone: "+91 6002562417 / 7086788028",
      url: "tel:+916002562417",
      icon: <GiRotaryPhone />

    },
    {
      email: "",
      addrs: "Mandia, Mandia, Barpeta, Assam, -781308 India",
      url: "",
      icon: <RiMapPinLine />

    },
  ]

  const footerLink = [
    {
      name: "Terms & Conditions",
      url: "/terms-conditions"
    },
    {
      name: "Privacy Policy",
      url: "/privacy-policy"
    },
    {
      name: "Disclaimer",
      url: "/disclaimer"
    },
    {
      name: "Refund Policy",
      url: "/refund-policy"
    },

  ]
  return (
    <>
      {/* <FooterMenu/> */}


      <footer className="bg-gray-100 dark:bg-gray-700 footer font-roboto mt-4">
        <div className="mx-auto max-w-[1200px] px-4 pt-5 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-600 sm:justify-start">
                <img src="assets/images/logo/logo-dark1.png" alt="mainLogo" />
              </div>
              <p className="dark:text-[#D6D6D6] mt-3 max-w-md font-roboto text-[16px] leading-relaxed text-gray-600 sm:max-w-xs sm:text-left ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                cum itaque neque.
              </p>

              <ul className="mt-3 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a href="#_" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook />
                  </a>
                </li>

                <li>
                  <a href="#_" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram />
                  </a>
                </li>

                <li>
                  <a href="#__" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Youtube</span>
                    <FaYoutube />
                  </a>
                </li>

                <li>
                  <a href="#__" rel="noreferrer" target="_blank" className="text-[25px] text-red-400 transition hover:text-green-600/75" >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="font-roboto text-[16px] sm:text-left">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Main Menu</p>
                <ul className="mt-3 space-y-4 text-sm ">
                  {mainMenu.map((mainMenus, index) => {
                    return (
                      <li>
                        <Link className="text-gray-700 font-roboto capitalize text-[17px] 
                            transition hover:text-green-600/75 dark:text-[#D6D6D6] dark:hover:text-white" to={mainMenus.url}>
                          {mainMenus.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="font-roboto text-[16px]sm:text-left">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Our Services</p>

                <ul className="mt-3 space-y-4 text-sm">
                  {ourServices.map((ourServ, index) => {
                    return (
                      <li>
                        <Link className="text-gray-700 font-roboto capitalize text-[17px] 
                            transition hover:text-green-600/75 dark:text-[#D6D6D6] dark:hover:text-white" to={ourServ.url}>
                          {ourServ.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="font-roboto text-[16px] sm:text-left">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Helpful Links</p>
                <ul className="mt-3 space-y-4 text-sm">
                  {helpLink.map((helpLinks, index) => {
                    return (
                      <li>
                        <Link className="text-gray-700 font-roboto capitalize text-[17px] 
                              transition hover:text-green-600/75 dark:text-[#D6D6D6] dark:hover:text-white" to={helpLinks.url}>
                          {helpLinks.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="font-roboto text-[16px] sm:text-left">
                <p className="text-[20px] font-roboto underline font-[600] dark:text-white text-gray-900">Contact Us</p>
                <ul className="mt-3 space-y-4 text-sm">
                  {contUs.map((contacts, index) => {
                    return (
                      <li>
                        <Link className="flex items-center gap-1.5 hover:text-green-600/75 ltr:sm:justify-start rtl:sm:justify-end"
                          to={contacts.url}>
                          <div className="shrink-0 dark:text-[#D6D6D6]  text-gray-900 shadow-sm text-[20px] hover:text-green-600/75" >
                            {contacts.icon}
                          </div>
                          <span className="flex-1 dark:text-[#D6D6D6] dark:hover:text-white font-roboto text-[16px] text-gray-700 hover:text-green-600/75">
                            {contacts.email}
                            {contacts.phone}
                            {contacts.addrs}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-3  grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex justify-cente sm:justify-start w-full">
              <img src="assets/images/footer/Footer-payment-icons.png" alt="Footer-logo" />
            </div>
            <div className="w-full flex items-center ml-auto justify-center sm:justify-start">
              <ul>
                <li>
                  <Link to="/">
                    <img src="assets/images/footer/google_play.png" className="inline pr-2"
                      alt="Google_Play" />
                  </Link>
                  <Link to="/">
                    <img src="assets/images/footer/App_store.png" className="inline"
                      alt="Googel_Store" />
                  </Link>
                </li>
              </ul>
              <div className="flex px-2 items-center">
                <img src="assets/images/footer/iso-9001-logo.png" className=" inline size-20" alt="ISOImage" />
                <img src="assets/images/footer/pngtree.png" className="inline size-15" alt="ISOImage" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 dark:border-[#d6d6d6cb] border-t py-2 w-full px-5 bg-gray-600  dark:bg-gray-700">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <div className="text-sm text-[#D6D6D6] font-roboto text-[16px]">
            {footerLink.map((footerLinks, index) => {
              return (
                  <Link className="inline-block pr-3 transition hover:text-white" to={footerLinks.url} >
                    {footerLinks.name}
                  </Link>
                );
              })}
              </div>
            <p className="text-sm capitalize text-white font-roboto text-[16px] sm:order-first sm:mt-0">
              Copyright &copy; 2023 Nofino Rural Finance all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footers;