import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <div>
          <h3>By: Joshua Soave</h3>
          <h5>Book icon by Icons8</h5>
        </div>

        <a
          href="https://developer.nytimes.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="new york times logo"
            src="https://developer.nytimes.com/files/poweredby_nytimes_200a.png?v=1583354208344"
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
