import React from "react";
import { shoe8, shoe9, shoe10 } from "../assets/images";
import Buttons from "../components/Buttons";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >

      <div className='flex-1 flex justify-center items-center relative' id="Images">
        <img
          src={shoe8}
          alt='product detail'
          width={300}
          height={522}
          className='object-contain animate-bounce' 
          style={{ position: 'absolute', bottom: '0', left: '20%' }}
        />
        <img
          src={shoe9}
          alt='product detail'
          width={255}
          height={522}
          className='object-contain rounded-xl shadow-3xl animate-bounce'
          style={{ position: 'absolute', top: '0', left: '0' }}
        />
        <img
          src={shoe10}
          alt='product detail'
          width={250}
          height={522}
          className='object-contain rounded-xl shadow-3xl animate-bounce'
          style={{ position: 'absolute', top: '0', right: '0', left: '55%' }}
        />
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-cyan-600 animate-pulse'> Super </span>
          <span className='text-cyan-600 animate-pulse'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-2xl font-montserrat text-slate-gray text-base leading-8 mt-2 moving-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text font-semibold'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Buttons label='View details' iconURL={arrowRight}/>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
