import React, { useState } from "react";
//count up
import CountUp from "react-countup";
//intersection observe
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";
//link
import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        {/* img */}
        <div
          className="flex flex-col gap-y-10 lg:flex-row lg:items-center
      lg:gap-x-20 lg:gap-y-0 h-screen"
        >
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px]
          mix-blend-lighten bg-top"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">
              I am a Freelance Software engineer wth over 3 years of experience{" "}
            </h3>
            <p className="mb-6">
              Hey! I'm a versatile software engineer, data engineer, web
              developer, and DevOps enthusiast. Skilled in creating top-notch
              web applications, I thrive on coding, design, and optimizing
              workflows through DevOps practices. I'm passionate about
              innovation, continuous learning, and collaborating on impactful
              projects. Let's connect and explore tech's endless possibilities
              together!
            </p>
            {/* stats */}

            <div className=" flex gap-x-6 lg:gap-x-10 mb-12  ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={24} duration={3} /> : null}
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  Months of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                  k+
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={24} duration={3} /> : null}
                </div>

                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg ">
              <Link to="contact">
              Request for a Quote
              </Link>
              </button>
              
                 <Link className="text-gradient btn-link" to="work">
                 My Portfolio
                </Link>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
