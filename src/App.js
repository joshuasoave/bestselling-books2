import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import "./main.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import TopTen from "./components/TopTen";

const App = () => {
  const [allBooks, setAllBooks] = useState([]);

  const getCurrentFictionBooks = () => {
    return axios
      .get(
        "https://books-api-nyt-62a23e681e0a.herokuapp.com/books/currentFiction"
      )
      .then((response) => {
        return response.data;
      });
  };

  useEffect(() => {
    const checkBooks = () => {
      const fetchData = async () => {
        try {
          const booksData = await getCurrentFictionBooks();
          const allBooks = booksData?.results?.books;
          setAllBooks(allBooks);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    };
    checkBooks();
  }, []);

  return (
    <div className="App">
      {!allBooks.length > 0 ? (
        <div className="loading">
          <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Header />
          <main>
            <TopTen allBooks={allBooks} />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
