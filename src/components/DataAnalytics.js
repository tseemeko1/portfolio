import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsArrowRight, BsBarChart, BsDatabase, BsGraphUp } from "react-icons/bs";

const DataAnalytics = () => {
  const analyticsProjects = [
    {
      id: 1,
      title: "Business Intelligence Dashboard",
      category: "Power BI & Data Visualization",
      description: "Comprehensive BI dashboard with real-time analytics, KPI tracking, and interactive visualizations for business decision-making.",
      technologies: ["Power BI", "SQL", "DAX", "Data Modeling"],
      icon: BsBarChart,
    },
    {
      id: 2,
      title: "Data Pipeline & ETL Process",
      category: "Microsoft Fabric & Data Engineering",
      description: "End-to-end data pipeline using Microsoft Fabric for data ingestion, transformation, and loading with automated workflows.",
      technologies: ["Microsoft Fabric", "Azure", "Python", "ETL"],
      icon: BsDatabase,
    },
    {
      id: 3,
      title: "Predictive Analytics Model",
      category: "Machine Learning & Forecasting",
      description: "Advanced predictive models using time-series analysis and machine learning algorithms for business forecasting.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      icon: BsGraphUp,
    },
  ];

  return (
    <section className="section" id="dataanalytics">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-accent mb-4">Data Analytics Projects</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Transforming raw data into actionable insights through advanced analytics,
            visualization, and data engineering solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsProjects.map((project, index) => {
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
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
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
                    className="inline-flex items-center gap-2 text-gradient hover:gap-3 transition-all text-sm group/link"
                  >
                    View Details <BsArrowRight className="group-hover/link:translate-x-1 transition-transform" />
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

export default DataAnalytics;

