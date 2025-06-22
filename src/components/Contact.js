import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import cv from "../assets/pdf/Tsholofelo Seemeko software developer Cv.pdf";

const Contact = () => {
  const redirectUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/"
      : "https://tseemeko.github.io/portfolio/thankyou.html";

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let’s Work <br />
                together!
              </h2>
              <a
                href={cv}
                download="Tsholofelo Seemeko CV"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn btn-lg">Download CV</button>
              </a>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            action="https://formsubmit.co/ba6c98c734014fe1d703d4e7fc1a3e77"
            method="POST"
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            {/* Redirect */}
            <input type="hidden" name="_next" value={redirectUrl} />
            {/* Anti-spam */}
            <input type="hidden" name="_captcha" value="false" />

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              name="message"
              placeholder="Your message"
              rows="3"
              required
            ></textarea>
            <button className="btn btn-lg">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;