import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-32">
      <motion.div
        className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
      />
    </div>
  );
};

export default Loading;
