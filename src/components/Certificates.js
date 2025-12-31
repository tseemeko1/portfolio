import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { BsAward, BsCheckCircle, BsZoomIn, BsX } from "react-icons/bs";
import { FaMicrosoft } from "react-icons/fa";

// TODO: Add your certificate images to: src/assets/certificates/
// Then import them here:
import PowerBICert from "../assets/certificates/power-bi-certificate.png";
import FabricCert from "../assets/certificates/fabric-certificate.png";

// For now, you can use placeholder images or add your actual certificate images
// Supported formats: .jpg, .jpeg, .png

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Power BI Data Analyst",
      issuer: "Microsoft",
      description: "Certified in creating data models, building reports, and performing advanced analytics using Power BI.",
      skills: ["Data Modeling", "DAX", "Data Visualization", "Report Design"],
      icon: FaMicrosoft,
      color: "from-yellow-500/20 to-yellow-500/10",
      borderColor: "border-yellow-500/30",
      textColor: "text-yellow-400",
      // Replace null with: PowerBICert (after importing above)
      image: PowerBICert,
    },
    {
      id: 2,
      title: "Microsoft Fabric Data Engineering Associate",
      issuer: "Microsoft",
      description: "Expertise in building and managing data pipelines, data lakes, and analytics solutions using Microsoft Fabric.",
      skills: ["Data Engineering", "Azure", "ETL", "Data Warehousing"],
      icon: FaMicrosoft,
      color: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      // Replace null with: FabricCert (after importing above)
      image: FabricCert,
    },
  ];

  return (
    <section className="section" id="certificates">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="h2 text-accent mb-4">Certifications & Qualifications</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Professional certifications demonstrating expertise in data analytics,
            cloud platforms, and modern technologies.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                variants={fadeIn("up", 0.3 + index * 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="group relative"
              >
                <div className="relative border-2 border-white/20 rounded-2xl hover:border-accent/50 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:shadow-lg hover:shadow-accent/20 overflow-hidden">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 min-h-[350px] flex items-center justify-center">
                    {cert.image ? (
                      <>
                        <motion.img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                          onClick={() => setSelectedImage(cert.image)}
                          whileHover={{ scale: 1.02 }}
                        />
                        {/* Zoom indicator on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                          <motion.div
                            className="flex flex-col items-center gap-2"
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                          >
                            <BsZoomIn className="text-4xl text-white mb-2" />
                            <span className="text-white font-semibold text-sm">Click to View Full Size</span>
                          </motion.div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-8 w-full">
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <BsAward className="text-6xl text-white/20 mx-auto mb-4" />
                          <p className="text-white/50 text-sm mb-2">
                            Certificate image placeholder
                          </p>
                          <p className="text-white/40 text-xs">
                            Add your certificate image to:<br />
                            <code className="text-accent/60 text-xs">
                              src/assets/certificates/
                            </code>
                          </p>
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div
                        className="flex flex-col items-center gap-2"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                      >
                        <BsZoomIn className="text-4xl text-white mb-2" />
                        <span className="text-white font-semibold">Click to View Full Size</span>
                      </motion.div>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <BsCheckCircle className="text-accent text-lg" />
                      <span className="text-xs text-accent font-semibold">Verified</span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    {/* Issuer & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/60 text-sm">
                        {cert.issuer}
                      </span>
                      <motion.div
                        className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${cert.color} border ${cert.borderColor}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className={`text-xl ${cert.textColor}`} />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-primary font-bold mb-3 group-hover:text-accent transition-colors">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 mb-4 text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div>
                      <h4 className="text-xs font-semibold text-white/90 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-2 py-1 text-xs rounded-lg bg-white/10 border border-white/20 text-white/80 flex items-center gap-1"
                            whileHover={{ scale: 1.05 }}
                          >
                            <BsAward className="text-accent text-xs" />
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full Size Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-colors"
              >
                <BsX className="text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Additional Certificates Note */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 text-sm italic">
            More certifications coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

