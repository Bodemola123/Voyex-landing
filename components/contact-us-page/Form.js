"use client"
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from 'emailjs-com';
import Privacy from './Privacy';

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    accepted: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Please fill in your First Name';
    if (!formData.lastName) newErrors.lastName = 'Please fill in your Last Name';
    if (!formData.email) newErrors.email = 'Please fill in your Email';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true); // Start loading
    
    const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );
      toast.success('Your message has been sent successfully!');
      setFormData({ firstName: '', lastName: '', email: '', message: '', accepted: false });
      setErrors({});
    }catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(`Failed to send message: ${error.text || error.message}`);
    }finally {
      setLoading(false); // Stop loading
  }    
  };
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  return (
    <div className='flex flex-col bg-[#0d0d0d] lg:gap-8 sm:gap-6 lg:py-10 sm:py-8 lg:px-8 sm:px-6 border rounded-2xl border-[#FFFFFF33]'>
      <Toaster position='top-right' />
      <form onSubmit={handleSubmit} className='flex flex-col lg:gap-6 sm:gap-4'>
        <div className='flex md:flex-row sm:flex-col lg:gap-8 sm:gap-6'>
          <div>
            <label className='block lg:text-sm sm:text-sm font-medium text-[#f4f4f4] mb-1'>First Name</label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={formData.firstName}
              onChange={handleChange}
              className='w-full lg:px-4 lg:py-3 sm:px-3 sm:py-2 rounded-lg bg-[#000000] border border-[#1018280D] focus:outline-none focus:ring-0 text-white lg:text-base sm:text-sm placeholder:text-[#667085] placeholder:sm:text-sm placeholder:lg:text-base'
            />
            {errors.firstName && <p className='text-red-500 text-xs'>{errors.firstName}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-300 mb-1'>Last Name</label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={formData.lastName}
              onChange={handleChange}
              className='w-full lg:px-4 lg:py-3 sm:px-3 sm:py-2 rounded-lg bg-[#000000] border border-[#1018280D] focus:outline-none focus:ring-0 text-white lg:text-base sm:text-sm placeholder:text-[#667085] placeholder:sm:text-sm placeholder:lg:text-base'
            />
            {errors.lastName && <p className='text-red-500 text-xs'>{errors.lastName}</p>}
          </div>
        </div>
        <div>
          <label className='block lg:text-sm sm:text-sm font-medium text-[#f4f4f4] mb-1'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='you@company.com'
            value={formData.email}
            onChange={handleChange}
            className='w-full lg:px-4 lg:py-3 sm:px-3 sm:py-2 rounded-lg bg-[#000000] border border-[#1018280D] focus:outline-none focus:ring-0 text-white lg:text-base sm:text-sm placeholder:text-[#667085] placeholder:sm:text-sm placeholder:lg:text-base'
          />
          {errors.email && <p className='text-red-500 text-xs'>{errors.email}</p>}
        </div>
        <div>
          <label className='block lg:text-sm sm:text-sm font-medium text-[#f4f4f4] mb-1'>Message</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            className='w-full max-h-[130px] h-full lg:px-4 lg:py-2.5 sm:px-2.5 sm:py-1.5 resize-none rounded-lg bg-[#000000] border border-[#1018280D] text-white focus:outline-none focus:ring-0 lg:text-base sm:text-sm'
            rows='4'
          />
          <div className='flex flex-row gap-2 mt-2'>
            <input type='checkbox' name='accepted' checked={formData.accepted} onChange={handleChange} />
            <label className='font-normal lg:text-base sm:text-sm text-[#f4f4f4]'>You agree to our friendly <span className='underline underline-offset-4 hover:text-[#c088fb] cursor-pointer' onClick={() => setIsPrivacyOpen(true)}>privacy policy.</span></label>
          </div>
        </div>
        <button
          type='submit'
          disabled={!formData.accepted}
          className='bg-[#c088fb] lg:px-4 sm:px-3 lg:py-3 sm:py-2 border border-[#c088fb] rounded-[20px] sm:text-sm lg:text-base text-[#0a0a0b] text-center disabled:opacity-50 disabled:cursor-not-allowed'
        >
           {loading ? "Sending Message..." : "Send Message"}
        </button>
      </form>
      {isPrivacyOpen && <Privacy onClose={() => setIsPrivacyOpen(false)} />}
    </div>
  );
};

export default Form;
