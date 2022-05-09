import React, { useState } from "react";
import Image from "next/image";
import { Nav, Logo, Menu } from "./Navbar.styled";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Nav>
      <Logo>
        <Image layout="fill" src="/images/logo4.png" alt="logo" />
      </Logo>
      <ul>
        {["home", "about", "work", "skills", "contact"].map((el) => (
          <li key={`link-${el}`} className="p-text">
            <div />
            <a href={`#${el}`}>{el}</a>
          </li>
        ))}
      </ul>
      <Menu bg="/images/bgWhite.png">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((el) => (
                <li key={el} style={{ marginBottom: "20px" }}>
                  <div />
                  <a onClick={() => setToggle(false)} href={`#${el}`}>
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
