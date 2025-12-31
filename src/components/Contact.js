import React, { useState } from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { saveRFQ } from "../utils/rfqStorage";
import cv from "../assets/pdf/Tsholofelo Seemeko software developer Cv.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/"
      : "https://tseemeko.github.io/portfolio/thankyou.html";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    setIsSubmitting(true);
    // Save to localStorage
    saveRFQ(formData);
    // Form will continue with normal submission to FormSubmit
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section" id="contact">
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
                Request a Quote
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's Work <br />
                together!
              </h2>
              <p className="text-white/70 mb-8 max-w-md">
                Fill out the form to get a personalized quote for your project. I'll get back to you within 24 hours.
              </p>
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
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-2 border-white/20 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 lg:p-8 items-start bg-white/5 backdrop-blur-sm"
          >
            {/* Redirect */}
            <input type="hidden" name="_next" value={redirectUrl} />
            {/* Anti-spam */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Subject */}
            <input type="hidden" name="_subject" value="New Quote Request from Portfolio" />

            <div className="w-full">
              <input
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all"
                type="text"
                name="name"
                placeholder="Your name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <input
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all"
                type="email"
                name="email"
                placeholder="Your email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full">
              <input
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all"
                type="text"
                name="company"
                placeholder="Company/Organization (optional)"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <select
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white focus:border-accent transition-all appearance-none cursor-pointer"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" className="bg-primary text-white">Project Type *</option>
                <option value="Web Development" className="bg-primary text-white">Web Development</option>
                <option value="Data Analytics" className="bg-primary text-white">Data Analytics</option>
                <option value="AI & Machine Learning" className="bg-primary text-white">AI & Machine Learning</option>
                <option value="Mobile App Development" className="bg-primary text-white">Mobile App Development</option>
                <option value="UI/UX Design" className="bg-primary text-white">UI/UX Design</option>
                <option value="DevOps & Infrastructure" className="bg-primary text-white">DevOps & Infrastructure</option>
                <option value="Training & Certification" className="bg-primary text-white">Training & Certification</option>
                <option value="Other" className="bg-primary text-white">Other</option>
              </select>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <select
                  className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white focus:border-accent transition-all appearance-none cursor-pointer"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="" className="bg-primary text-white">Budget Range *</option>
                  <option value="Under BWP 25,000" className="bg-primary text-white">Under BWP 25,000</option>
                  <option value="BWP 25,000 - 70,000" className="bg-primary text-white">BWP 25,000 - 70,000</option>
                  <option value="BWP 70,000 - 180,000" className="bg-primary text-white">BWP 70,000 - 180,000</option>
                  <option value="BWP 180,000+" className="bg-primary text-white">BWP 180,000+</option>
                  <option value="To be discussed" className="bg-primary text-white">To be discussed</option>
                </select>
              </div>

              <div className="w-full">
                <select
                  className="bg-transparent border-b border-white/20 py-3 outline-none w-full text-white focus:border-accent transition-all appearance-none cursor-pointer"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                >
                  <option value="" className="bg-primary text-white">Timeline *</option>
                  <option value="ASAP / Urgent" className="bg-primary text-white">ASAP / Urgent</option>
                  <option value="1-2 months" className="bg-primary text-white">1-2 months</option>
                  <option value="3-6 months" className="bg-primary text-white">3-6 months</option>
                  <option value="6+ months" className="bg-primary text-white">6+ months</option>
                  <option value="Flexible" className="bg-primary text-white">Flexible</option>
                </select>
              </div>
            </div>

            <div className="w-full">
              <textarea
                className="bg-transparent border-b border-white/20 py-3 outline-none w-full placeholder:text-white/60 focus:border-accent transition-all resize-none mb-6"
                name="message"
                placeholder="Tell us about your project requirements, goals, and any specific features you need... *"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Hidden field to format the email nicely */}
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value="Thank you for your quote request! I'll review your requirements and get back to you within 24 hours with a detailed proposal." />

            <button 
              type="submit" 
              className="btn btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Request Quote'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;