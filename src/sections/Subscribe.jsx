import Buttons from "../components/Buttons"
import { arrowRight } from "../assets/icons"

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w font-palanquin font-bold'>
        Sign Up for
        <span className='text-cyan-600'> Updates </span>& Newsletter
      </h3>

      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@myshoestore.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Buttons label='Sign Up' iconURL={arrowRight} fullWidth />
        </div>
      </div>

    </section>
  )
}

export default Subscribe