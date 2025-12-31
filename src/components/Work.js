import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section " id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 ">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent text-[24px]">
                My latest 
                Work and Qualifications
              </h2>
              <p className="max-w-sm mb-16">
                I possess a diverse set of certifications including Python, Data
                Science, IBM Cloud Core, Cybersecurity, IoT, C++, and JavaScript
                from SoloLearn ,IBM and Cisco. Below are some of my recent Pojects. 
              </p>
              <button className="btn btn-sm">View All Projects</button>
            </div>
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
               border-white/20 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full
                 absolute z-40 transition-all duration-300 "
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-400 ease-in-out"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-300 ease-linear z-50"
              >
              <a href="https://anime-api-fetching-adbde.web.app/" target='_blank'>

                <span className="text-gradient ">Software Engineering</span>
              </a>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-500 ease-linear z-50"
              >
              <a href="https://anime-api-fetching-adbde.web.app/" target='_blank'>

                <span className="text-3x1 text-white ">Anime Website ApI Intergration</span>
              </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-9"
          >
            {/* Image */}
            <div
              className="group relative overflow-hidden border-2
               border-white/20 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full
                 absolute z-40 transition-all duration-300 "
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-400 ease-in-out"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-300 ease-linear z-50"
              >
              <a href="https://linked-in---to-change.firebaseapp.com/" target='_blank'>

                <span className="text-gradient ">UI/UX Design, Back-End </span>
              </a>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-500 ease-linear z-50"
              >
              <a href="https://linked-in---to-change.firebaseapp.com/" target='_blank'>

                <span className="text-3x1 text-white ">Linked In Clone</span>
              </a>
              </div>
            </div>

            {/* Image */}
            <div
              className="group relative overflow-hidden border-2
               border-white/20 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full
                 absolute z-40 transition-all duration-300 "
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-400 ease-in-out"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24
                transition-all duration-300 ease-linear z-50"
              >
              <a href="https://botswanamusic.000webhostapp.com/" target='_blank'>

                <span className="text-gradient ">UI/UX Design</span>
              </a>
              </div>
              {/* title */}
              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14
                transition-all duration-500 ease-linear z-50"
              >
              <a href="https://botswanamusic.000webhostapp.com/" target='_blank'>

                <span className="text-3x1 text-white ">BTUnes Music Website</span>
              </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
