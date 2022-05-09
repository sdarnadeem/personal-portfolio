import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../services/client";
import { Container } from "./Testimonial.styled";
import Image from "next/image";

const Testimonial = (props) => {
  const { data } = props[0][0];
  const { brands, testimonials } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const test = testimonials[currentIndex];

  const handleBackClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    }

    if (currentIndex < testimonials.length) {
      setCurrentIndex((previous) => previous - 1);
    }
  };

  const handleForwardClick = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    }

    if (currentIndex >= 0) {
      setCurrentIndex((previous) => previous + 1);
    }
  };

  console.log(currentIndex);

  return (
    <>
      {testimonials.length && (
        <Container className="app__flex">
          <div className="item app__flex">
            <div className="img">
              <Image
                layout="fill"
                src={urlFor(test.imgurl)}
                alt="testimonial"
              />
            </div>
            <div className="content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="btns app__flex">
            <div className="app__flex" onClick={handleBackClick}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={handleForwardClick}>
              <HiChevronRight />
            </div>
          </div>

          <div className="brands app__flex">
            {brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                key={brand._id}
              >
                <div className="img">
                  <Image
                    layout="fill"
                    src={urlFor(brand.imgUrl)}
                    alt={brand.name}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
