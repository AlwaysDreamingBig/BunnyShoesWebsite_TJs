import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [bigImage, setBigImage] = useState(images[0]);

  return (
    <div className="relative flex flex-col justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-slate-100 bg-cover bg-center">
      
      <img
        src={bigImage}
        alt="Selected shoe"
        width={600}
        height={600}
        className="absolute object-contain relative z-10 mt-40 mb-10 drop-shadow-2xl rounded-lg"
      />

      
        <div className="flex overflow-x-auto bg-white custom-scrollbar px-40 py-5" >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              width={100}
              height={100}
              className={`object-contain cursor-pointer mx-2 ${bigImage === image ? 'border-4 border-slate-10 rounded-lg' : ''}`}
              onClick={() => setBigImage(image)}
            />
          ))}
        </div>
      
    </div>
  );
};

export default ImageGallery;
