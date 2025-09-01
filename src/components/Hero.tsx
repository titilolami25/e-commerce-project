import { useEffect, useState } from "react";
import product1  from "../assets/images/product1.jpg"
import product2  from "../assets/images/product2.jpg"
import product3  from "../assets/images/product3.jpg"
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
    id: number,
    image: string,
    heading: string,
    text: string
};

const slides: Slide[] = [
  {
    id: 1,
    image: product1,
    heading: "Dish Wash Liquid Concentrate",
    text: "Every Home Choice, save more wash more .",
  },
  {
    id: 2,
    image: product2,
    heading: "Hand Wash",
    text: "Hand Free of Germs.",
  },
  {
    id: 3,
    image: product3,
    heading: "Hotel Toiletries ",
    text: "Luxurious every guest deserve.",
  },
];


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 10000); // image change every 10 seconds 

        return () => clearInterval(interval);
    }, [])

    const currentSlide = slides[currentIndex];

  return (
    <section className="bg-gray-100 py-10 h-[50vh] md:h-[60vh]">
      <div
        className="max-w-7xl mx-auto  flex flex-col 
     md:flex-row items-center justify-between px-6"
      >
        {/* Left Image animation */}
        <div
          className="w-full md:w-1/2 md:flex 
      justify-center mb-6 md:mb-0 hidden"
        >
          <AnimatePresence mode= "wait">
            <motion.img
              key={currentSlide.id}
              src={currentSlide.image}
              alt="Hero"
              className="w-72 h-full object-contain rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>

        {/* Right content */}
        <div
          className="w-full md:w-1/2 h-[40vh] md:h-[60vh] text-center
         flex flex-col justify-center md:text-left space-y-4
     "
        >
          <p>🔥Hottest </p>
          <h1
            className="text-3xl md:text-5xl font-bold text-gray md:text-left
          
          "
          >
            {currentSlide.heading}
          </h1>
          <p className="text-gray-700 text-lg">{currentSlide.text}</p>
          <div>
            <button
              className="w-full bg-accent text-white px-6
             py-2 shadow hover:bg-primary hover:text-gray  
             transition duration-400
            "
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;




