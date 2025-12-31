import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowRight, BsPhone, BsApp, BsCloud } from "react-icons/bs";

const MobileApps = () => {
  const mobileProjects = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      category: "React Native & Firebase",
      description: "Full-featured mobile shopping application with real-time inventory, payment integration, and push notifications.",
      technologies: ["React Native", "Firebase", "Redux", "Stripe API"],
      icon: BsApp,
      status: "Coming Soon",
    },
    {
      id: 2,
      title: "Fitness Tracking App",
      category: "Flutter & Health APIs",
      description: "Cross-platform fitness app with workout tracking, progress analytics, and social features for motivation.",
      technologies: ["Flutter", "Dart", "Health APIs", "Cloud Storage"],
      icon: BsPhone,
      status: "In Development",
    },
    {
      id: 3,
      title: "Cloud-Based Task Manager",
      category: "Mobile & Cloud Integration",
      description: "Synchronized task management app with cloud backup, offline mode, and team collaboration features.",
      technologies: ["React Native", "AWS", "GraphQL", "Real-time Sync"],
      icon: BsCloud,
      status: "Coming Soon",
    },
  ];

  return (
    <section className="section" id="mobileapps">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-accent mb-4">Mobile Applications</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Cross-platform mobile applications built with modern frameworks,
            delivering seamless user experiences across iOS and Android.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="group relative"
              >
                <div className="relative h-full p-8 border-2 border-white/20 rounded-2xl hover:border-accent/50 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-accent/20">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold">
                      {project.status}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-3xl text-accent" />
                  </motion.div>

                  {/* Category */}
                  <span className="text-gradient text-sm font-semibold mb-3 block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-primary font-bold mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-gradient hover:gap-3 transition-all text-sm group/link opacity-70"
                  >
                    Learn More <BsArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </a>

                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileApps;

