import React, { useState } from 'react';
import Primal from '../assets/Primal.jpeg';
import Logo from '../assets/Logo.png';
import web from '../assets/web.png';
import Rating from "./Rating";

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = '+94711234567'; // Replace with your WhatsApp number
    const message = `Name: ${formData.name}%0APhone Number: ${formData.phoneNumber}%0AComment: ${formData.comment}`;
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappLink = generateWhatsAppLink();
    window.open(whatsappLink, '_blank');
    // You can also send the form data to a backend server here if needed
  };

  return (
    <div>

     
      <div className='flex flex-col flex-auto w-full h-screen'>
        <div className='h-full'>
          <div className='grid grid-cols-3 h-full'>
            <div
              className='bg-green-700 bg-contain lg:flex bg-no-repeat hidden h-full'
              style={{ backgroundImage: `url(${Primal})` }}
            >
              <div class='p-4 text-white flex flex-col justify-end items-end'>
                <div className='flex items-center justify-center'>
                  <img
                    src={Logo}
                    alt='logo'
                    className='w-[250px] h-[100px] mb-5 ml-[100px] justify-center'
                  />
                </div>
              </div>
            </div>

            <div className='col-span-2 flex justify-center items-center'>
              <div className='min-w-[450] px-8'>
                <div className='mb-8'>
                  <h2 className='text-3xl text-yellow-500 font-extrabold'>
                    Welcome to MeGha1
                  </h2>
                  <p className='text-slate-800'>Share Your Ideas With Us</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label className='font-medium mb-2 flex'>Enter Your Name</label>
                    <input
                      type='text'
                      name='name'
                      required
                      placeholder='Enter your name'
                      className='w-full border rounded-md bg-transparent border-gray-400 p-3'
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className='mb-3'>
                    <label className='font-medium mb-2 flex'>
                      Enter Your Phone Number
                    </label>
                    <input
                      type='text'
                      name='phoneNumber'
                      placeholder='Enter your phone number'
                      className='w-full border rounded-md bg-transparent border-gray-400 p-3'
                      value={formData.phoneNumber}
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className='mb-3'>
                    <label className='font-medium mb-2 flex'>
                      Share Your Comment Here
                    </label>
                    <textarea
                      name='comment'
                      placeholder='Enter your comment'
                      className='w-full border rounded-md bg-transparent border-gray-400 p-3 h-40 resize-none'
                      required
                      value={formData.comment}
                      onChange={handleChange}
                    />
                    <Rating/>
                  </div>

                  <button
                    type="submit"
                    className='block bg-green-700 hover:bg-yellow-500 text-white w-full py-2 px-8 rounded hover:text-green-700  duration-300'
                  >
                    Share With Us
                  </button>


                </form>

                <div className='pt-6 flex flex-row items-center'>
  <button
    type="submit"
    className=' bg-green-700 hover:bg-yellow-500 text-white flex items-center py-2 px-16 rounded hover:text-green-700 duration-300'
  >
    <img className='w-10 h-10 mr-2 text-white' src={web} alt="Website Icon" />
    VISIT US ONLINE
  </button>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
