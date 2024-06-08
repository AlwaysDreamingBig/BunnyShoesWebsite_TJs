import { arrowRight } from "../assets/icons"
import Buttons from "../components/Buttons"
import ImageGallery from "../components/ImageGallery";
import SentenceLoop from "../components/SentenceLoop";

import { shoeImages, statistics } from "../constants"
import { sentences } from "../constants"

const Hero = () => {



  return (
    
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-2 border-red-500 p-2">
     
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        
        <p className="sm:mt-20 xl:mt-10 text-xl font-montserrat text-blue-500 shadow-lg font-semibold">
          SUMMER 2024 COLLECTION!!
        </p>

        <h1 className="mt-5 text-4xl max-sm:text-[60px] max-sm:leading-[82]">
         
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> Discover the Hottest Summer</span>
          <br />

          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">2024 Shoe Collection</span>
          <br />

          <span className="text-coral-red inline-block pr-3 font-bold">Nike,</span>
         
          <span className="text-white inline-block bg-blue-400 font-bold">Addidas, </span>
          
          <span className="text-coral-red inline-block xl:pl-3 pl-2 font-bold">Jordan </span>
          
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10"> Shoes </span>
        </h1>
       
        <SentenceLoop sentences={sentences} />

        <Buttons label="Show now" iconURL={arrowRight}/>

        <div className="flex justify-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div>
              <p className="text-4xl font-palanquin font-bold"> {stat.value} </p>
              <p> {stat.label} </p>
            </div>
          ))}
        </div>

      </div>

      <ImageGallery images={shoeImages} />
      
    </section>
  )
}

export default Hero