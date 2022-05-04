import React from "react";
import { motion } from "framer-motion";
import { HeaderComp } from "./Header.styled";
import { AppWrap } from "../../wrapper";

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <HeaderComp bg={"images/bgIMG.png"} className="app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="info"
      >
        <div className="badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Nadeem</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer </p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="img"
      >
        <img src="/images/profile2.png" alt="profile bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src="/images/circle.svg"
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="circles"
      >
        {tech.map((circle, index) => (
          <div className="app__flex" key={`circle-${index}`}>
            <img src={`/images/${circle}.png`} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </HeaderComp>
  );
};

export default AppWrap(Header, "home", "", { display: "none" });

const tech = ["flutter", "redux", "sass"];
