import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const messages = [
  "🔥Mega Deals on All Products",
  "🎉New Arrivals",
  "Soap Concentrate Discount",
  "Fragrance Collections",
  "Limited Time Discounts", // Add more messages as needed
];

const Advert = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 5000); // Change message every 5 seconds
        return () => clearInterval(timer);
    }, [])



  return (
    <section className="bg-accent py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center h-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessageIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center 
        justify-center text-gray text-2xl font-decorative "
          >
            {messages[currentMessageIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Advert
