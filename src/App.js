import * as React from "react";
import "./App.css";
import { motion } from "framer-motion";

export const App = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h1>COMING SOON!</h1>
        <p>
          Our website is currently under construction, but that doesn’t mean
          <div>
            Get in touch with us or{" "}
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1PZ1l4C5aK9YbLlY0PMMugpIKPteNx4Ha/view"
              rel="noreferrer"
            >
              view our group profile
            </a>{" "}
            till our website is back live.
          </div>
        </p>
        <div className="contact">
          <div className="contactWrapper">
            <a
              href="mailto:info@blackcobra.org"
              target="_blank"
              rel="noreferrer"
              className="email"
            >
              Email
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+91-9681822222"
              target="_blank"
              rel="noreferrer"
              className="whatsapp"
            >
              Get in touch
            </a>
          </div>
          <div className="hour">
            <img src="hour.png" alt="waiting" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default App;
