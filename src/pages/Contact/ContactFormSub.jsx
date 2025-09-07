import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import GoogleMapIndex from './GoogleMapIndex';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', subject: '', message: '' })
  
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', mobile: '', subject: '', message: '' });

    emailjs
      .sendForm('service_qbx1dqs', 'template_nqnt1ed', form.current, {
        publicKey: 'ctWlcd_EJZ66ACCLS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message sent FAILED...!');
        },
      );
  };

  return (
    <>
      <div className="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div className="max-w-[1200px] w-full mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid_row grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-[#fff] dark:bg-gray-800 shadow-md sm:rounded-lg">
                <GoogleMapIndex/>
              </div>

              <div className="border-[1.5px] shadow-md border-solid border-gray-500 rounded-lg dark:border-[#D6D6D6] bg-[#fff] dark:bg-gray-700" >
                <form action="#" method="POST" className="p-6 flex flex-col justify-center" ref={form} onSubmit={sendEmail}>
                  <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Your Full Name</label>
                      <div className="mt-2.5">
                        <input type="text"
                            id="name"
                            name="name"
                            className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off"/>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Mobile Number</label>
                      <div className="mt-2.5">
                        <input type="number" 
                            id="mobile"
                            name="mobile"
                            className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off"/>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Your Email ID</label>
                      <div className="mt-2.5">
                        <input type="email" 
                            id="email"
                            name="email"
                            className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off"/>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Subject</label>
                      <div className="mt-2.5">
                        <input type="text" 
                             id="subject"
                            name="subject"
                            className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off"/>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm dark:text-[#D6D6D6] text-[14px] font-roboto font-bold leading-6 text-gray-900">Message</label>
                      <div className="mt-2.5">
                        <textarea rows="4" 
                              id="message"
                              name="message"
                        className="block w-full rounded-md font-roboto px-3.5 py-2 bg-gray-100 border-[1px] border-gray-400
                           text-gray-700 shadow-sm dark:bg-[#fff] dark:text-gray-800 font-[500]
                             sm:text-sm sm:leading-6" required autoComplete="off"></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    {formData ? 
                    <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500
                         to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
                          dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2">
                      Send message
                    </button>
                    :
                    <button disabled type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500
                         to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                         focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg
                          dark:shadow-green-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2">
                      <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                      </svg>
                      Loading...
                    </button>
                    }
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}
export default ContactForm;