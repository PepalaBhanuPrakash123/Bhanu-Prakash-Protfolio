import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function TechLandingPage() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => navigate("./home"), 1200);
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden text-white animate-gradient"
      style={{
        background: "linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #0d1117)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      {/* Background Glow Circles */}
      <div className="absolute -top-20 -left-20 w-72 md:w-96 h-72 md:h-96 bg-blue-600 rounded-full opacity-30 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-56 md:w-72 h-56 md:h-72 bg-purple-700 rounded-full opacity-30 blur-2xl animate-pulse-slower" />

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 relative flex flex-col items-center justify-center text-center h-full px-4 sm:px-6"
      >
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.4, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text drop-shadow-xl"
        >
          Beyond this screen lies something extraordinary
        </motion.h1>
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.9, duration: 1.2 }}
  className="mt-12 max-w-[90%] sm:max-w-2xl md:max-w-3xl text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-semibold leading-relaxed"
>
  Press Enter to break the loop
</motion.p>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-14 text-xs sm:text-sm text-gray-400"
        >
          (Click anywhere to navigate → Home)
        </motion.div>
      </motion.div>

      {/* Transition Effect Overlay */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-50 bg-gradient-to-br from-lime-400 via-blue-500 to-purple-600"
          />
        )}
      </AnimatePresence>

      {/* Gradient Animation Keyframes in Style Tag */}
      <style>
        {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
}

