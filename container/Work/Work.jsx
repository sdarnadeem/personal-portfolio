import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../services/client";
import { Div1, Div2 } from "./Work.styled";

import Image from "next/image";

const Work = (props) => {
  const { data: works } = props[0][0];
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWork, setFilterWork] = useState([]);
  const [showButtons, setShowButtons] = useState(null);

  useEffect(() => {
    setFilterWork(works);
  }, []);

  const handleClick = () => {
    setShowButtons((prev) => !prev);
  };

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <Div1>
      <h2 className="head-text">
        My creative
        <span> Portfolio</span>
        <br />
      </h2>
      <Div2>
        {["UI/UX", "Nextjs", "Reactjs", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </Div2>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="portfolio"
      >
        {filterWork.map((work, index) => (
          <div
            onClick={handleClick.bind(work.name)}
            className="item app__flex"
            key={work + index}
          >
            <div className="img app__flex">
              <div className="img-container">
                <Image
                  layout="fill"
                  src={urlFor(work.imgUrl)}
                  alt={work.name}
                />
              </div>
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                whileTap={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",

                  staggerChildren: 0.5,
                }}
                className="hover app__flex"
              >
                <a href={work.projectLink} target="blank" rel="norefer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLenk} target="blank" rel="norefererr">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
              {showButtons && (
                <div className="click app__flex" style={{ opacity: 1 }}>
                  <a href={work.projectLink} target="blank" rel="norefererr">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLenk} target="blank" rel="norefererr">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
              )}
            </div>
            <div className="content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </Div1>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
