import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../services/client";
import { Container } from "./Skills.styled";

const Skills = (props) => {
  const { data } = props[0][0];
  const { skills, experiences } = data;

  return (
    <Container className="app__flex">
      <h2 className="head-text">Skills and Experience</h2>
      <div className="container">
        <motion.div className="list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="item"
              key={experience.year + index + "experience"}
            >
              <div className="year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="work"
                      data-tip
                      data-for={work.name}
                      key={work.name + index + "item"}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
