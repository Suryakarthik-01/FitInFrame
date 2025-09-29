import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium rerum voluptatem ad expedita similique dignissimos animi saepe facilis tenetur repellat recusandae iusto ducimus minima consectetur facere odit, aspernatur, at quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iure impedit omnis esse quo. Libero necessitatibus alias quae aperiam quidem dolores voluptate tenetur, nesciunt distinctio suscipit consequatur harum facilis iste!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quae autem ratione temporibus officia provident ad repellendus aliquid qui nisi, fugiat optio culpa deleniti odit nam pariatur sunt quos quas!</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSEUS'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio ipsa autem cumque nihil laboriosam tenetur neque beatae quas mollitia, esse iusto, laborum fuga dolorem rerum aut libero error facere.</p>
        </div>
        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio ipsa autem cumque nihil laboriosam tenetur neque beatae quas mollitia, esse iusto, laborum fuga dolorem rerum aut libero error facere.</p>
        </div>
        <div className='text-gray-600 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio ipsa autem cumque nihil laboriosam tenetur neque beatae quas mollitia, esse iusto, laborum fuga dolorem rerum aut libero error facere.</p>      
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About