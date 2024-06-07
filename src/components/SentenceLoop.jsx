import React, { useState, useEffect } from 'react';

const SentenceLoop = ({ sentences }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0); // Index of the currently displayed sentence

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Move to the next sentence after 5 seconds
      setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000); // 5 seconds

    return () => clearTimeout(timeout); 
  }, [currentSentenceIndex, sentences]);

  return (
    <div className="p-2">
      {sentences.map((sentence, index) => (
        <p
          key={index}
          className={`font-montserrat text-slate-gray text-base leading-8 mt-2 mb-5 moving-text ${
            index === currentSentenceIndex ? '' : 'hidden'
          }`}
        >
          {sentence}
        </p>
      ))}
    </div>
  );
}

export default SentenceLoop;
