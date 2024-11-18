import { useEffect, useState } from "react";
import Travelcard from "../Components/Travelcard";
import homepageimg1 from "../Imgs/Cairo.png";
import homepageimg2 from "../Imgs/Sinai.png";
import homepageimg3 from "../Imgs/Alex.png";
import homepageimg4 from "../Imgs/Aswan.png";
import homepageimg5 from "../Imgs/Giza.png";
import homepageimg6 from "../Imgs/Sharm.png";

function Homepage(){
    const images = [homepageimg1, homepageimg2,homepageimg3,homepageimg4,homepageimg5,homepageimg6];

    const [currentIndex, setCurrentIndex] = useState(1); // Start at index 1 (the first real image)
    const [isTransitioning, setIsTransitioning] = useState(true);
  
    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    };
  
    // Automatically change the slide every 3 seconds
    useEffect(() => {
      const interval = setInterval(handleNextSlide, 3000);
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    // Reset the slider position when it reaches the duplicated slides
    const handleTransitionEnd = () => {
      if (currentIndex === images.length + 1) {
        setIsTransitioning(false); // Disable animation
        setCurrentIndex(1); // Jump back to the real first image
      } else if (currentIndex === 0) {
        setIsTransitioning(false); // Disable animation
        setCurrentIndex(images.length); // Jump to the real last image
      } else {
        setIsTransitioning(true); // Enable animation for normal slides
      }
    };
    return(
        <>
<div className="relative w-full overflow-hidden ">
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-1000" : ""}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {/* Duplicate last image */}
        <img
          src={images[images.length - 1]}
          alt="Duplicate of Last Slide"
          className="w-full md:h-screen object-cover flex-shrink-0"
        />

        {/* Render all images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full md:h-[680px] object-cover flex-shrink-0"
          />
        ))}

        {/* Duplicate first image */}
        <img
          src={images[0]}
          alt="Duplicate of First Slide"
          className="w-full md:h-[680px] object-cover flex-shrink-0"
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)} // Account for the duplicate image
            className={`w-3 h-3 rounded-full ${
              currentIndex === index + 1 ||
              (currentIndex === images.length + 1 && index === 0) // Handle the loop case
                ? "bg-blue-500"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
<Travelcard/>
</>

);
}
export default Homepage