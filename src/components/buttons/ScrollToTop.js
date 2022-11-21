import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BiUpArrowAlt } from "react-icons/bi";
import "./scrollToTop.scss";

export function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <div className="icon-position icon-style" onClick={goToTop}>
          <BiUpArrowAlt
            fillRule={theme === "theme-dark" ? "white" : "black"}
            style={{ height: "1.5em", width: "1.5em" }}
          />
        </div>
      )}
    </div>
  );
}
