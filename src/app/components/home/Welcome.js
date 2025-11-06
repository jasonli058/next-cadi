'use client'
import Reveal from "@/app/components/animations/Reveal";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <>
      <div className="text-center isolate">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          
          >
            <span className="lg:text-6xl text-5xl font-bold text-white textsd">
              CADI
            </span>
            <br />
            <br />
            <span className="border-t-2 border-t-white lg:text-4xl text-3xl font-semibold text-white textsd">
              Commissions and Digital Innovations
            </span>
          </motion.div>
      </div>
      
      <div className="isolate text-4xl absolute bottom-4 lg:left-14 left-7 font-semibold text-black ">
        <Reveal>
          <h2 className="border-[10px] border-r-[20px] border-l-[20px] border-gray-50 bg-gray-50 rounded-full">Welcome!</h2>
        </Reveal>
      </div>
    </>
  )
}

export default Welcome