import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowRight, BsArrowLeft, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/portfolio-img4.png";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const webProjects = [
    {
      id: 1,
      title: "Anime Website API Integration",
      category: "Software Engineering",
      image: Img1,
      link: "https://anime-api-fetching-adbde.web.app/",
      description: "Modern web application with API integration and dynamic content",
    },
    {
      id: 4,
      title: "NeuroWeb Website",
      category: "Website Development",
      image: Img4,
      link: "https://neuroweb.co.bw/",
      description: "Modern website for a technology consulting company",
    },
    {
      id: 2,
      title: "LinkedIn Clone",
      category: "UI/UX Design, Back-End",
      image: Img2,
      link: "https://linked-in---to-change.firebaseapp.com/",
      description: "Full-stack social networking platform with real-time features",
    },
    {
      id: 3,
      title: "BTUnes Music Website",
      category: "UI/UX Design",
      image: Img3,
      link: "https://botswanamusic.000webhostapp.com/",
      description: "Music streaming platform with intuitive user interface",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % webProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + webProjects.length) % webProjects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % webProjects.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [webProjects.length]);

  return (
    <section className="section" id="webapps">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-accent mb-4">Web Applications</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Modern, responsive web applications built with cutting-edge technologies
            and best practices. Each project showcases different aspects of full-stack development.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group relative overflow-hidden border-2 border-white/20 rounded-2xl hover:border-accent/50 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="relative w-full lg:w-1/2 overflow-hidden">
                    <motion.img
                      className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                      src={webProjects[currentIndex].image}
                      alt={webProjects[currentIndex].title}
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex-1 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent">
                    <motion.span
                      className="text-gradient text-sm font-semibold mb-3 block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {webProjects[currentIndex].category}
                    </motion.span>
                    <motion.h3
                      className="text-2xl lg:text-3xl font-primary font-bold mb-4 group-hover:text-accent transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {webProjects[currentIndex].title}
                    </motion.h3>
                    <motion.p
                      className="text-white/70 mb-6 text-sm lg:text-base leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {webProjects[currentIndex].description}
                    </motion.p>
                    <motion.a
                      href={webProjects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gradient hover:gap-3 transition-all group/link w-fit"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      View Project <BsArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm border-2 border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent transition-all group"
              aria-label="Previous slide"
            >
              <BsChevronLeft className="text-xl group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm border-2 border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent transition-all group"
              aria-label="Next slide"
            >
              <BsChevronRight className="text-xl group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {webProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8 scale-110"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-white/60 text-sm">
            {currentIndex + 1} / {webProjects.length}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
