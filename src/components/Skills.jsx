import { Element } from "react-scroll";
import PropTypes from "prop-types";

import macos from "../assets/icons/macos.svg";
import tailwind from "../assets/icons/tailwind.svg";
import react from "../assets/icons/react.svg";
import java from "../assets/icons/java.svg";
import javascript from "../assets/icons/javascript.svg";
import node from "../assets/icons/nodejs.svg";
import spring from "../assets/icons/spring.svg";
import mysql from "../assets/icons/mysql.svg";
import git from "../assets/icons/git.svg";
import linux from "../assets/icons/linux.svg";
import windows from "../assets/icons/windows.svg";
import mongo from "../assets/icons/mongodb.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import express from "../assets/icons/express.svg";
import docker from "../assets/icons/docker.svg";
import typescript from "../assets/icons/typescript.svg";
import angular from "../assets/icons/angular.svg";
import kotlin from "../assets/icons/kotlin.svg";
import swift from "../assets/icons/swift.svg";
import nest from "../assets/icons/nest.svg";

const learnedSkills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "React Native", icon: react },
  { name: "Node.js", icon: node },
  { name: "Express", icon: express },
  { name: "Java", icon: java },
  { name: "Spring", icon: spring },
  { name: "MySQL", icon: mysql },
  { name: "MongoDB", icon: mongo },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: git },
  { name: "Linux", icon: linux },
  { name: "MacOS", icon: macos },
  { name: "Windows", icon: windows },
];

const learningSkills = [
  { name: "Kotlin", icon: kotlin },
  { name: "Docker", icon: docker },
  { name: "TypeScript", icon: typescript },
];

const interestedSkills = [
  { name: "Angular", icon: angular },
  { name: "NestJs", icon: nest },
  { name: "Swift", icon: swift },
];

const SkillList = ({ title, skills, color }) => (
  <div className="space-y-6">
    <div>
      <h3 className={`text-lg font-bold ${color} mb-6`}>{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20"
        >
          <div className="flex flex-col items-center gap-3">
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-center text-sm font-medium text-gray-300 transition-colors group-hover:text-pink-400">
              {skill.name}
            </span>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-600 to-pink-400 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
        </div>
      ))}
    </div>
  </div>
);

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  color: PropTypes.string,
};

const Skills = () => {
  return (
    <Element name="skills" className="bg-base">
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <div className="inline-flex items-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/10 to-pink-400/10 px-4 py-2 text-sm font-semibold text-pink-400">
                <span className="h-2 w-2 rounded-full bg-pink-400"></span>
                Expertise
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl">
              <span className="block text-white">Habilidades</span>
              <span className="block bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 bg-clip-text text-transparent">
                Técnicas
              </span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-12 md:grid-cols-3">
            <SkillList
              title="Aprendidas"
              skills={learnedSkills}
              color="text-pink-400"
            />
            <SkillList
              title="Aprendiendo"
              skills={learningSkills}
              color="text-purple-400"
            />
            <SkillList
              title="Interesado en"
              skills={interestedSkills}
              color="text-blue-400"
            />
          </div>
        </div>

        {/* Decorative background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 right-0 -z-10 transform-gpu blur-3xl sm:-top-80">
            <div
              className="aspect-[1404,767] w-[87.75rem] bg-gradient-to-r from-pink-500 to-purple-600 opacity-10"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.5%, 92.5% 84.7%, 75.7% 64%, 55.3% 47.6%, 46.5% 49.7%, 45% 62.4%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            ></div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;