import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, className) =>
  function HOC(...props) {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${className} app__flex`}
      >
        <Component {...props} />
      </motion.div>
    );
  };

export default MotionWrap;
