export type SkillItem = { name: string };

export const skillsData: {
  frontend: SkillItem[];
  backend: SkillItem[];
  mobile: SkillItem[];
  databases: SkillItem[];
  tools: SkillItem[];
} = {
  frontend: [
    { name: "HTML" }, { name: "CSS" }, { name: "JavaScript" },
    { name: "React" }, { name: "Bootstrap" },
  ],
  backend: [
    { name: "Java" }, { name: "Spring Boot" }, { name: "Python" }, { name: "Node.js" },
  ],
  mobile: [{ name: "Kotlin" }],
  databases: [{ name: "MySQL" }, { name: "Laragon" }],
  tools: [{ name: "GitHub" }, { name: "Postman" }, { name: "Swagger" }, { name: "Maven" }],
};
