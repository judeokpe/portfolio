// "use client"

// import Image from 'next/image'
// import React from 'react'

// function GetQuote() {
//   return (
//     <div className='bg-slate-100 md:py-32 '>
//         <h2 className='uppercase text-2xl text-yellow-700 '>Get a Quote</h2>
//         <div className='w-20 border-[3px] border-green-600 mx-auto ' />


//         <div className="flex justify-between">
//             <div className="">
//                 <Image src={"/webilus.png"}  width={500} height={500} alt='contact' className='w-[400px] h-[350px] object-cover' />
//             </div>
//             <div className="">
//                 <form action=""></form>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default GetQuote


// "use client";

// import Image from 'next/image';
// import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';

// type FormData = {
//   name: string;
//   email: string;
//   phone: string;
//   company?: string;
//   message: string;
// };

// function GetQuote() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className='bg-slate-100 dark:bg-gray-900 md:py-32 px-6'>
//       <h2 className='uppercase text-2xl text-yellow-700 text-center'>Get a Quote</h2>
//       <div className='w-20 border-[3px] border-green-600 mx-auto my-4' />

//       <div className='flex flex-col md:flex-row justify-between mt-20 md:space-x-8'>
//         <div>
//           <Image src={'/webilus.png'} width={600} height={500} alt='contact' className='w-[600px] h-auto object-cover' />
//         </div>
//         <div className='w-full max-w-lg bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg'>
//           <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
//             <div>
//               <label className='block text-sm font-medium text-gray-700'>Full Name</label>
//               <input {...register('name', { required: 'Name is required' })} className='w-full px-4 py-2 border rounded-md' />
//               {errors.name && <p className='text-red-500 text-sm'>{errors.name.message}</p>}
//             </div>

//             <div>
//               <label className='block text-sm font-medium dark:text-slate-100 text-gray-700'>Email</label>
//               <input {...register('email', { required: 'Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email address' } })} className='w-full px-4 py-2 border rounded-md' />
//               {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
//             </div>

//             <div>
//               <label className='block text-sm font-medium text-gray-700 dark:text-slate-100 '>Phone</label>
//               <input {...register('phone', { required: 'Phone number is required' })} className='w-full px-4 py-2 border rounded-md' />
//               {errors.phone && <p className='text-red-500 text-sm'>{errors.phone.message}</p>}
//             </div>

//             <div>
//               <label className='block text-sm font-medium text-gray-700 dark:text-slate-100 '>Company Name</label>
//               <input {...register('company')} className='w-full px-4 py-2 border rounded-md' />
//             </div>

//             <div>
//               <label className='block text-sm font-medium text-gray-700 dark:text-slate-100 '>Message</label>
//               <textarea {...register('message', { required: 'Message is required' })} className='w-full px-4 py-2 border rounded-md'></textarea>
//               {errors.message && <p className='text-red-500 text-sm'>{errors.message.message}</p>}
//             </div>

//             <button type='submit' className='w-full bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-800 transition'>
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GetQuote;


"use client";

import Image from 'next/image';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
};

function GetQuote() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className='bg-slate-100 dark:bg-gray-900 md:py-32 md:px-6'>
      <h2 className='uppercase text-2xl text-yellow-700 text-center'>Get a Quote</h2>
      <div className='w-20 border-[3px] border-green-600 mx-auto my-4' />

      <div className='flex flex-col md:flex-row justify-between items-center md:space-x-8'>
        <div>
          <Image src={'/webilus.png'} width={500} height={500} alt='contact' className='w-[600px] h-[350px] object-cover' />
        </div>
        <div className='w-full max-w-lg bg-white dark:bg-gray-700 shadow-lg p-6 rounded-lg'>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 dark:text-white text-left'>Full Name</label>
              <input {...register('name', { required: 'Name is required' })} className='w-full px-4 py-2 border rounded-md' />
              {errors.name && <p className='text-red-500 text-sm text-left'>{errors.name.message}</p>}
            </div>

            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 text-left dark:text-white'>Email</label>
              <input {...register('email', { required: 'Email is required', pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email address' } })} className='w-full px-4 py-2 border rounded-md' />
              {errors.email && <p className='text-red-500 text-sm text-left'>{errors.email.message}</p>}
            </div>

            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 text-left dark:text-white'>Phone</label>
              <input {...register('phone', { required: 'Phone number is required' })} className='w-full px-4 py-2 border rounded-md' />
              {errors.phone && <p className='text-red-500 text-sm text-left'>{errors.phone.message}</p>}
            </div>

            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 text-left dark:text-white'>Company Name</label>
              <input {...register('company')} className='w-full px-4 py-2 border rounded-md' />
            </div>

            <div className='flex flex-col'>
              <label className='text-sm font-medium text-gray-700 text-left dark:text-white'>Message</label>
              <textarea {...register('message', { required: 'Message is required' })} className='w-full px-4 py-2 border rounded-md' defaultValue="Please enter a detailed description of what you want, and we will get back to you through email or WhatsApp" />
              {errors.message && <p className='text-red-500 text-sm text-left'>{errors.message.message}</p>}
            </div>

            <button type='submit' className='w-full bg-yellow-700 text-white py-2 rounded-md hover:bg-yellow-800 transition'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetQuote;