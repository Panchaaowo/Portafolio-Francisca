"use client";
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import SkillCard from "../molecules/skills/SkillCard";


import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiBootstrap, SiSwagger,
  SiOpenjdk,             
  SiSpring, SiPython, SiNodedotjs, SiPostgresql, SiMysql,
  SiKotlin, SiAndroidstudio, SiGithub, SiPostman, SiApachemaven,
} from "react-icons/si";


const brand = {
  html: "#E34F26",
  css: "#1572B6",
  js: "#F7DF1E",
  react: "#61DAFB",
  ts: "#3178C6",         
  bootstrap: "#7952B3",
  swagger: "#85EA2D",
  java: "#EA2D2E",       
  spring: "#6DB33F",
  python: "#3776AB",
  node: "#339933",
  sql: "#CC2927",        
  mysql: "#4479A1",
  kotlin: "#7F52FF",
  android: "#3DDC84",
  github: "#181717",
  postman: "#FF6C37",
  maven: "#C71A36",
};

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: brand.html },
      { name: "CSS", Icon: SiCss3, color: brand.css },
      { name: "JavaScript", Icon: SiJavascript, color: brand.js },
      { name: "React", Icon: SiReact, color: brand.react },
      { name: "TypeScript", Icon: SiTypescript, color: brand.ts }, 
      { name: "Bootstrap", Icon: SiBootstrap, color: brand.bootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Java", Icon: SiOpenjdk, color: brand.java },
      { name: "Spring", Icon: SiSpring, color: brand.spring },
      { name: "Python", Icon: SiPython, color: brand.python },
      { name: "Node.js", Icon: SiNodedotjs, color: brand.node },
      { name: "SQL", Icon: SiPostgresql, color: brand.sql },
      { name: "MySQL", Icon: SiMysql, color: brand.mysql },
    ],
  },
  {
    title: "Mobile & Tools",
    skills: [
      { name: "Kotlin", Icon: SiKotlin, color: brand.kotlin },
      { name: "Android Studio", Icon: SiAndroidstudio, color: brand.android },
      { name: "GitHub", Icon: SiGithub, color: brand.github },
      { name: "Postman", Icon: SiPostman, color: brand.postman },
      { name: "Swagger", Icon: SiSwagger, color: brand.swagger },
      { name: "Maven", Icon: SiApachemaven, color: brand.maven },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="text-center mb-4">
        <h2 className="mb-1 section-title-neon">Mi Stack Tecnológico</h2>
        <p className="text-muted m-auto max-62ch" />
      </div>

      <Row className="g-4">
        {skillCategories.map((cat) => (
          <Col md={6} lg={4} key={cat.title}>
            <Card className="skills-panel p-3 border-0 h-100">
              <div className="d-flex justify-content-center">
                <h3 className="h5 fw-bold mb-3 section-subtitle">{cat.title}</h3>
              </div>
              <Row className="g-3">
                {cat.skills.map((s) => (
                  <Col xs={6} key={s.name}>
                    <SkillCard name={s.name} Icon={s.Icon} color={s.color} />
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
