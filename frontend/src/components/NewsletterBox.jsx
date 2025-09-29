import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{

        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium tetx-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit repellat quaerat repudiandae tenetur. Asperiores rerum eveniet minima quos maxime, facilis est culpa voluptatem, fugit aperiam quas modi assumenda sunt consequuntur!
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email id' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsletterBox