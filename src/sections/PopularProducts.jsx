import PopularProductCard from '../components/PopularProductCard';
import {products} from '../constants';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max:sm:mt-12'>
      <div className='flex flex-col justify-start gap-3'>
        <h2 className='text-4xl font-palaquin font-bold'>
           Our 
           <span className='text-cyan-600'> Best Sellers!!</span> 
        </h2>

        <p className='lg:max-w-2xl font-montserrat text-slate-gray text-base leading-8 mt-2 moving-text'> Great value is about more than just price; it's about what you get for your investment. Our shoes offer exceptional quality, providing you with footwear that enhances your life in every way possible. Slip into our shoes and you'll not only feel great but also turn heads wherever you go. Get ready to be the center of attention with your impeccable style and confidence. </p>
        
        <p className=' font-semibold '> Choose our shoes and step into a world of unmatched value and benefits. </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gridcols-1 sm:gap-4 gap-14'>
        {products.map((product) =>
          <PopularProductCard key={ product.name} {...product} />
        )}
      </div>
    </section>
  )
}

export default PopularProducts