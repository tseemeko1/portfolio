import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
//
import { Link } from "react-scroll";


const services = [
  {
    name: "Software Engineering",
    description: "Software engineers design, develop, and maintain applications. They write clean code, conduct rigorous testing for quality assurance, and collaborate with teams to deploy and improve software, while staying updated with industry best practices."





    ,
    link: "learn more",
    id: 1,
  },
  {
    name: "Web Development",
    description: "Web development is about building and maintaining websites and applications. Developers use languages like HTML, CSS, and JavaScript for both front-end and back-end functionalities, ensuring user-friendly interfaces and optimal performance.",
    link: "learn more",
    id: 2,
  },
  {
    name: "UI/UX design",
    description: " UI/UX design focuses on user experience and interface functionality by creating intuitive and visually appealing interfaces, considering user needs and behavior, employing wireframes and tests to refine designs for optimal usability",
    link: "learn more",
    id: 3,
  },
  {
    name: "Dev OPS",
    description: "DevOps combines software development with IT operations for efficient, automated workflows.Streamlining collab between development and operations teams, utilizing tools/practices to automate builds, testing, and deployment",
    link: "learn more",
    id: 4,
  },
];

const Services = () => {
  return (
    <section className="section " id="services">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* text & Image */}
          <motion.div
          variants={fadeIn('right',0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}

            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
            mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I DO</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Software Engineer with a degree in Electronic Engineering
            </h3>
            <Link to="work">
            <button className="btn btn-sm">See My Work</button>

            </Link>
          </motion.div>
          {/* services */}
          <motion.div 
          className="flex-1"
          variants={fadeIn('left',0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}>
            {/* services list */}
            <div>
              {services.map((service) => {
                //destructure service

                const { name, description, link, id } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={id}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
