import React from "react";
import "./main.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import TopTen from "./components/TopTen";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <TopTen />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
