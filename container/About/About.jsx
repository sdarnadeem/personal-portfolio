import React from "react";
import { motion } from "framer-motion";
import { Profile } from "./About.styled";
import { urlFor } from "../../services/client";
import { AppWrap, MotionWrap } from "../../wrapper";
import Image from "next/image";

const About = (props) => {
  const { data: abouts } = props[0][0];
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Apps</span>
        <br />
        means
        <span> Good Business</span>
      </h2>
      <Profile className="app_profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="item"
            key={about.title + index}
          >
            <div className="item-img">
              <Image
                layout="fill"
                src={urlFor(about.imgUrl)}
                alt={about.title}
              />
            </div>
            <h2 className="bold-text" style={{ marginTop: "20px" }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: "10px" }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </Profile>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
