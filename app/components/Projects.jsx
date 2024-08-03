"use client";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projectData = [
  {
    id: 0,
    title: "Pantry Tracker",
    description:
      "Pantry Tracker is a web application that helps you keep track of your pantry items and suggests recipes based on the ingredients you have. It leverages Firebase for the backend and integrates OpenAI for recipe suggestions.",
    image: "/pantry-tracker.png",
    git: "https://github.com/KhanhHa26/Pantry-Tracker",
  },
  {
    id: 1,
    title: "Adogtion",
    description:
      "Adogtion is a web service designed to connect potential dog adopters with dogs in need of homes. The platform allows users to browse available dogs, post dogs for adoption, and manage the adoption process through an admin panel.",
    image: "/adogtion.png",
    git: "https://github.com/KhanhHa26/Adogtion",
  },
  {
    id: 2,
    title: "Nourish Net",
    description:
      "At Nourish Net, our journey began with a simple yet powerful belief: every student deserves a fair chance at success. Founded by passionate college women who witnessed firsthand the struggles of fellow students, we've made it our mission to tackle food insecurity head-on.",
    image: "/nourish-net.png",
    git: "https://github.com/maponbie/DEVAS",
  },
  {
    id: 3,
    title: "Athena Bot",
    description:
      "A Discord chat bot that helps Bryn Mawr student retrieve essential and up-to-date information by commands on Bryn Mawr College website without having to search through different menu tabs",
    image: "/athena-bot.png",
    git: "https://github.com/breadrollfort/Athena-Bot",
  },
  {
    id: 4,
    title: "Battle Bug",
    description:
      "Battle Bug is a game in which 4 bugs are coded using Java to compete with each other, while having to avoid the rock, to be the last one surviving. Last bug survive will win the competition",
    image: "/battle-bug.png",
    git: "https://github.com/KhanhHa26/MyBattleBug",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref} id="projects">
      <h2 className="text-center text-4xl font-bold text-pink-200 mt-4 mb-8">
        My Projects
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.2, delay: index * 0.4 }}
            className="list-none"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              git={project.git}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
