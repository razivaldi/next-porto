"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Personal Portfolio Website",
    image: "/images/projects/porto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/razivaldi/next-porto",
    previewUrl: "https://next-porto-zeta.vercel.app/",
  },
  {
    id: 2,
    title: "Cek Toko Sebelah",
    description: "Project E-commerse",
    image: "/images/projects/ecom.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/razivaldi/react-ecommerce",
    previewUrl: "https://ecom.aldiverse.com/",
  },
  {
    id: 3,
    title: "Dashboard E-commerse",
    description: "Dashboard for Cek Toko Sebelah",
    image: "/images/projects/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/razivaldi/material-dashboard",
    previewUrl: "https://dashboard.aldiverse.com/dashboard/home",
  },
  {
    id: 4,
    title: "REST API",
    description: "API for Cek Toko Sebelah",
    image: "/images/projects/api.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/razivaldi/mongoDB",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="scroll-mt-28">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
