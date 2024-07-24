"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-left lg:max-w-lg"
      >
        <h1 className="text-pink-200 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-white">
            Hello, I am <br />
          </span>
          <TypeAnimation
            sequence={[
              "Khanh Ha",
              1000, // wait 1s before replacing "Khanh Ha" with "Student at Bryn Mawr College"
              "Student at Bryn Mawr College",
              1000,
              "Programmer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="py-5">
          <a
            href="https://www.linkedin.com/in/khanh-ha-nguyen1/"
            className="px-6 py-3 rounded-full mr-4 bg-pink-200 hover:bg-slate-200 text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/KhanhHa26"
            className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white"
          >
            GitHub
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center mt-6 lg:mt-0"
      >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
          <Image src="/main.png" alt="main image" layout="fill" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
