import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../variants";
import { BsCheckCircle, BsCurrencyDollar, BsClock, BsCodeSlash, BsBarChart, BsRobot, BsBook, BsArrowLeft, BsX } from "react-icons/bs";
import { Link } from "react-scroll";

const ServicesDetail = ({ onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  const [activeTab, setActiveTab] = useState("web");

  const webServices = [
    {
      category: "Basic Website",
      scope: "Brochure site, landing page, contact form",
      model: "Fixed Price",
      range: "BWP 8,000–25,000",
    },
    {
      category: "Business Website / CMS",
      scope: "WordPress/Shopify + basic backend",
      model: "Fixed Price",
      range: "BWP 25,000–70,000",
    },
    {
      category: "Custom Web App",
      scope: "React/Vue + Backend + API integrations",
      model: "Milestone/Fixed",
      range: "BWP 70,000–180,000",
    },
    {
      category: "Enterprise Web Platform",
      scope: "High-volume, security, multi-role",
      model: "Milestone + Retainer",
      range: "BWP 180,000+",
    },
    {
      category: "Maintenance + Support",
      scope: "Monthly updates, bug fixes",
      model: "Retainer",
      range: "BWP 4,000–15,000/mo",
    },
  ];

  const dataServices = [
    {
      category: "Data Pipeline Setup",
      scope: "ETL/ELT + Cloud DB",
      model: "Fixed/Milestone",
      range: "BWP 40,000–120,000",
    },
    {
      category: "Business Intelligence (BI)",
      scope: "Dashboards + reports",
      model: "Fixed",
      range: "BWP 30,000–90,000",
    },
    {
      category: "Advanced Analytics",
      scope: "Predictive models, data strategy",
      model: "Project-Based",
      range: "BWP 80,000–200,000",
    },
    {
      category: "Data Warehouse / Lake",
      scope: "Architecture + implementation",
      model: "Milestone",
      range: "BWP 100,000–300,000",
    },
    {
      category: "Ongoing Analytics Support",
      scope: "Retainer",
      model: "Monthly",
      range: "BWP 6,000–20,000/mo",
    },
  ];

  const aiServices = [
    {
      category: "AI Pilot/MVP",
      scope: "Simple prototype, API-backed",
      model: "Fixed / Project",
      range: "BWP 150,000–600,000",
    },
    {
      category: "Predictive Models",
      scope: "Regression, classification models",
      model: "Fixed / Milestone",
      range: "BWP 300,000–1,200,000+",
    },
    {
      category: "Custom AI Platform",
      scope: "End-to-end production AI",
      model: "Milestone / Retainer",
      range: "BWP 800,000+",
    },
    {
      category: "AI Consulting / Strategy",
      scope: "Feasibility, roadmap",
      model: "Hourly",
      range: "BWP 500–1,500/hr",
    },
    {
      category: "Model Maintenance",
      scope: "Retraining & monitoring",
      model: "Monthly",
      range: "BWP 10,000–40,000/mo",
    },
  ];

  const addOnServices = [
    {
      service: "UI/UX workshops",
      description: "Design sprints, user research",
      price: "BWP 15,000–60,000",
    },
    {
      service: "DevOps Setup",
      description: "CI/CD + cloud automation",
      price: "BWP 10,000–80,000",
    },
    {
      service: "API Integrations",
      description: "Third-party services",
      price: "BWP 8,000–40,000+",
    },
    {
      service: "Security & Compliance",
      description: "Pen testing, audit",
      price: "BWP 10,000–60,000",
    },
  ];

  const trainingServices = [
    {
      certification: "Power Apps (PL-100)",
      training: "~USD 1,700 (10-day bootcamp)",
      exam: "~$165 USD",
      bundle: "Training + Exam prep + Voucher package available",
    },
    {
      certification: "Power BI (PL-300)",
      training: "~$399–$899 USD (Basic) / ~$3,995 USD (Bootcamp with 2 exams)",
      exam: "~$165 USD",
      bundle: "Bootcamp packages available",
    },
    {
      certification: "Azure Fundamentals (AZ-900)",
      training: "$0–$300 (self-study / paid prep)",
      exam: "~$99 USD",
      bundle: "Self-study or paid prep courses available",
    },
    {
      certification: "Azure AI Engineer (AI-102)",
      training: "~$400 (paid course)",
      exam: "~$165 USD",
      bundle: "Course + exam prep available",
    },
    {
      certification: "Azure Data Engineer (DP-203)",
      training: "~$400–$450 (paid course)",
      exam: "~$165 USD",
      bundle: "Complete training package available",
    },
  ];

  const billingMethods = [
    {
      method: "Fixed Price",
      description: "When scope is clear (preferred)",
      icon: BsCheckCircle,
    },
    {
      method: "Milestone Billing",
      description: "For mid-sized projects",
      icon: BsClock,
    },
    {
      method: "Hourly Rate",
      description: "For support or consulting (~BWP 400–1,200/hr)",
      icon: BsCurrencyDollar,
    },
    {
      method: "Monthly Retainer",
      description: "For ongoing support and maintenance",
      icon: BsClock,
    },
  ];

  const tabs = [
    { id: "web", label: "Web Development", icon: BsCodeSlash },
    { id: "data", label: "Data & Analytics", icon: BsBarChart },
    { id: "ai", label: "AI & ML", icon: BsRobot },
    { id: "training", label: "Training", icon: BsBook },
  ];

  const getActiveServices = () => {
    switch (activeTab) {
      case "web":
        return webServices;
      case "data":
        return dataServices;
      case "ai":
        return aiServices;
      case "training":
        return trainingServices;
      default:
        return webServices;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 overflow-y-auto"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm"></div>
        
        {/* Modal Content */}
        <div className="relative min-h-screen py-8 lg:py-12" onClick={(e) => e.stopPropagation()}>
          <div className="container mx-auto px-4">
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onClose}
              className="fixed top-4 right-4 lg:top-8 lg:right-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 border-2 border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent transition-all backdrop-blur-sm"
            >
              <BsX className="text-2xl" />
            </motion.button>

            {/* Back Button */}
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              className="mb-8"
            >
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 text-gradient hover:gap-3 transition-all group"
              >
                <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Services</span>
              </button>
            </motion.div>

            {/* Header */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              className="text-center mb-12"
            >
          <h2 className="h2 text-accent mb-4">💼 Software Services Pricing Model</h2>
          <p className="max-w-3xl mx-auto text-white/70">
            Transparent pricing for all services. Choose the model that works best for your project.
          </p>
        </motion.div>

            {/* Tabs */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-white/20 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                <Icon />
                <span className="font-semibold">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

            {/* Services Table */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              className="mb-12"
            >
          <div className="bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide">
              {activeTab === "training" ? (
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Certification
                      </th>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Training
                      </th>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Exam Fee
                      </th>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Bundle Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getActiveServices().map((service, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-4 lg:px-6 py-4 font-semibold text-white text-sm lg:text-base">
                          {service.certification}
                        </td>
                        <td className="px-4 lg:px-6 py-4 text-white/70 text-xs lg:text-sm">
                          {service.training}
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <span className="text-gradient font-bold text-sm lg:text-base whitespace-nowrap">
                            {service.exam}
                          </span>
                        </td>
                        <td className="px-4 lg:px-6 py-4 text-white/70 text-xs lg:text-sm">
                          {service.bundle}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="w-full">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Category
                      </th>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Scope
                      </th>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Pricing Model
                      </th>
                      <th className="px-4 lg:px-6 py-4 text-left font-primary font-semibold text-accent text-sm lg:text-base">
                        Price Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getActiveServices().map((service, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-4 lg:px-6 py-4 font-semibold text-white text-sm lg:text-base">
                          {service.category || service.service}
                        </td>
                        <td className="px-4 lg:px-6 py-4 text-white/70 text-xs lg:text-sm">
                          {service.scope || service.description}
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <span className="px-2 lg:px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold whitespace-nowrap">
                            {service.model}
                          </span>
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <span className="text-gradient font-bold text-sm lg:text-base whitespace-nowrap">
                            {service.range || service.price}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </motion.div>

            {/* Billing Methods */}
            {activeTab !== "training" && (
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
                className="mb-12"
              >
            <h3 className="h3 text-accent mb-6 text-center">Typical Billing Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {billingMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:border-accent/50 transition-all"
                  >
                    <Icon className="text-3xl text-accent mb-4" />
                    <h4 className="font-primary font-bold text-white mb-2">{method.method}</h4>
                    <p className="text-white/70 text-sm">{method.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

            {/* Add-On Services */}
            {activeTab === "web" && (
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                className="mb-12"
              >
            <h3 className="h3 text-accent mb-6 text-center">4️⃣ Additional Services (Add-Ons)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOnServices.map((addon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:border-accent/50 transition-all"
                >
                  <h4 className="font-primary font-bold text-white mb-2">{addon.service}</h4>
                  <p className="text-white/70 text-sm mb-4">{addon.description}</p>
                  <span className="text-gradient font-bold">{addon.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

            {/* Training Bundle Info */}
            {activeTab === "training" && (
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                animate="show"
                className="bg-gradient-to-br from-accent/10 to-transparent border-2 border-accent/30 rounded-2xl p-8"
              >
            <h3 className="h3 text-accent mb-4">📌 Training Bundles Available</h3>
            <p className="text-white/70 mb-4">
              We offer bundled packages that include training, exam prep, and exam vouchers:
            </p>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-start gap-2">
                <BsCheckCircle className="text-accent mt-1 flex-shrink-0" />
                <span>Power BI Bootcamp + 2 Exams: ~$3,995 USD (all inclusive)</span>
              </li>
              <li className="flex items-start gap-2">
                <BsCheckCircle className="text-accent mt-1 flex-shrink-0" />
                <span>Azure AI + Fundamentals bundle: $2,500–$3,500 USD</span>
              </li>
              <li className="flex items-start gap-2">
                <BsCheckCircle className="text-accent mt-1 flex-shrink-0" />
                <span>Data Engineer + Azure Fundamentals: $2,500–$3,500 USD</span>
              </li>
            </ul>
            <p className="text-white/60 text-sm mt-4 italic">
              Note: Prices are in USD. Convert to BWP based on current exchange rates.
            </p>
          </motion.div>
        )}

            {/* Contact CTA */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              animate="show"
              className="text-center mt-12"
            >
              <p className="text-white/70 mb-6">
                Ready to get started? Let's discuss your project requirements.
              </p>
              <Link to="contact" onClick={onClose}>
                <button className="btn btn-lg">Request for a Quote</button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServicesDetail;

