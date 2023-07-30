import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footerContent">
        <h3>By: Joshua Soave</h3>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://icons8.com/icon/112289/book"
        >
          Book
        </a>{" "}
        icon by{" "}
        <a target="_blank" rel="noreferrer" href="https://icons8.com">
          Icons8
        </a>
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
