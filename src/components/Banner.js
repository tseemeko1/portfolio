import React from "react";
// images
import Image from "../assets/avatar.png";
//icons
import { FaGithub,  FaEnvelope, FaLinkedin, FaTiktok } from "react-icons/fa";
//Type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//link to 
import { Link } from "react-scroll";




const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto mt-0 pt-0">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[50px]"
            >
              TSHOLOFELO <span>SEEMEKO</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[30px] font-secondary
              font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am </span>

              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Web Developer",
                  2000,
                  "Electronic engineer",
                  2000,
                  "Cyber security analyst",
                  2000,
                  "Web designer",
                  2000,
                  "Systems analyst",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            {/* </div> */}
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am a passionate Software Engineer with a Bachelor's degree
              of Electronics engineering from the University of Botswana. My expertise extends beyond
              engineering into the dynamic world of software development.
              Proficient in a spectrum of programming languages including
              JavaScript, HTML, React, Python, C++, C#, CSS, Sass, and Tailwind,
              I bring a versatile skill set to every project.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto
              lg:mx-0"
            >
              <button className="btn btn-lg">
               
                <Link to="contact" className=" cursor-pointer" >  Contact Me</Link>
              </button>
              <Link to="work" className=" cursor-pointer text-gradient btn-link ">
                My Portfolio
              </Link>

                <a href="https://www.tiktok.com/@techlord26" target='_blank'>
                <FaTiktok />
              </a>
              <a href="https://github.com/tseemeko1" target='_blank'>
                <FaGithub />
              </a>
              <a href="mailto:tseemeko1@gmail.com" target='_blank'>
              <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/tsholofelo-seemeko-4223ba217/" target='_blank'>
              <FaLinkedin />
              </a>
                
            </motion.div>
            {/* socials */}
            {/* <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex txt-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0 "
            >
              <a href="#">
                <FaTiktok />
              </a>
              <a href="https://github.com/tseemeko1">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div> */}
          </div>
          {/* image */}

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]:"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
