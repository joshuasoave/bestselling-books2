import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

//this is gonna be where you pass in fantasy or sci fi or whatever
//based on what is passed in, it will call the appropriate API
//and then display the top 10 books

const TopTen = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [topTen, setTopTen] = useState([]);
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
      if (!allBooks.length > 0) {
        const fetchData = async () => {
          try {
            const booksData = await getCurrentFictionBooks();
            const allBooks = booksData?.results?.books;
            setAllBooks(allBooks);
            const topTenBooks = allBooks?.slice(0, 10);
            setTopTen(topTenBooks);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }
    };

    checkBooks();
  }, [allBooks.length]);

  return (
    <div>
      {topTen.map((book, index) => {
        return (
          <div className="bookContainer" key={index}>
            <h5 className="bookTitle">{book.title}</h5>
            <p className="bookAuthor">{book.author}</p>
            <img className="bookCover" src={book.book_image} alt={book.title} />
            <p className="bookDescription">{book.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TopTen;
