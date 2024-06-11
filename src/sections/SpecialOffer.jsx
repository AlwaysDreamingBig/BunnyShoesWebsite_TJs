import { offer } from "../assets/images";
import { SpOffer1 } from "../assets/images";
import { SpOffer2 } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section className='flex-col justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>

      <div className='flex flex-1 flex-col items-start ml-24'>
        <h2 className='text-4xl font-palanquin font-bold animate-ping gap-10'>
            <span className='text-cyan-600'>Special </span>
            Offer!!!
        </h2>
      </div>

      <div className='flex flex-1 flex-col w-1/2 bg-white py-8'>
        <p className='mt-4 info-text '>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-24 items-center'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={73}
          height={387}
          className='object-contain w-full'
        />
        <img
          src={SpOffer1}
          alt='Shoe Promotion'
          width={373}
          height={387}
          className='object-contain w-full'
        />
        <img
          src={SpOffer2}
          alt='Shoe Promotion'
          width={373}
          height={387}
          className='object-contain w-full'
        />
      </div>


    </section>
  )
}

export default SpecialOffer