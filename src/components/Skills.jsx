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

const SkillList = ({ title, skills }) => (
  <div>
    <h3 className="text-pink-400 text-2xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-4">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center space-x-4">
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-8 h-8"
          />
          <span className="text-pink-300">{skill.name}</span>
        </li>
      ))}
    </ul>
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
};

const Skills = () => {
  return (
    <Element name="skills" className="bg-base min-h-[100vh] py-20 px-4">
      <h2 className="text-pink-400 font-semibold text-4xl text-center mb-8">
        Habilidades Técnicas
      </h2>
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <SkillList title="Habilidades aprendidas" skills={learnedSkills} />
          <SkillList title="Aprendiendo" skills={learningSkills} />
          <SkillList title="Interesado en aprender" skills={interestedSkills} />
        </div>
      </div>
    </Element>
  );
};

export default Skills;
