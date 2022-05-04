import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (el, i) => (
          <a
            key={el + i}
            className="app__navigation-dot"
            style={active === el ? { backgroundColor: "#313bac" } : {}}
            href={`#${el}`}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
