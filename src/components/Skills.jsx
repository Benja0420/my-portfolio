import { Element } from "react-scroll";
import macos from "../assets/icons/macos.svg";
//import from "../assets/icons/";
import tailwind from "../assets/icons/tailwind.svg";
import react from "../assets/icons/react.svg";

const learnedSkills = [
  { name: "JavaScript", icon: "/assets/icons/javascript.svg" },
  { name: "React", icon: react },
  { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
  { name: "Spring", icon: "/assets/icons/spring.svg" },
  { name: "Java", icon: "/assets/icons/java.svg" },
  { name: "MySQL", icon: "/assets/icons/mysql.svg" },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Git", icon: "/assets/icons/git.svg" },
  { name: "Linux", icon: "/assets/icons/linux.svg" },
  { name: "MacOS", icon: macos },
  { name: "Windows", icon: "/assets/icons/windows.svg" },
];

const learningSkills = [
  { name: "Docker", icon: "/assets/icons/docker.svg" },
  { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
  { name: "Microservices", icon: "/assets/icons/microservices.svg" },
];

const interestedSkills = [
  { name: "Kotlin", icon: "/assets/icons/kotlin.svg" },
  { name: "Swift", icon: "/assets/icons/swift.svg" },
];

const SkillList = ({ title, skills }) => (
  <div>
    <h3 className="text-mocha-text text-2xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-4">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center space-x-4">
          <img
            src={skill.icon}
            alt={`${skill.name} icon`}
            className="w-8 h-8"
          />
          <span className="text-latte-subtext1">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  return (
    <Element name="skills" className="bg-base py-12 px-4">
      <h2 className="text-pink-400 font-semibold text-4xl text-center mb-8">
        Skills
      </h2>
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <SkillList title="Learned Skills" skills={learnedSkills} />
          <SkillList title="Learning Skills" skills={learningSkills} />
          <SkillList
            title="Skills Interested to Learn"
            skills={interestedSkills}
          />
        </div>
      </div>
    </Element>
  );
};

export default Skills;
