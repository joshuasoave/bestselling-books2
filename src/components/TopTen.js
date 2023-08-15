import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const TopTen = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [topTen, setTopTen] = useState([]);
  const [bookIndex, setBookIndex] = useState(0);

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
            // Handle error if the promise is rejected
            console.error(error);
          }
        };
        fetchData();
      }
    };

    checkBooks();
  }, [allBooks.length]);

  const increaseIndex = () => {
    if (bookIndex < 9) {
      setBookIndex(bookIndex + 1);
    }
  };
  const decreaseIndex = () => {
    if (bookIndex > 0) {
      setBookIndex(bookIndex - 1);
    }
  };

  const book = allBooks[bookIndex];

  return (
    <div>
      <div className="bookContainer">
        <h5 className="bookTitle">{book?.title}</h5>
        <p className="bookAuthor">{book?.author}</p>
        <img className="bookCover" src={book?.book_image} alt={book?.title} />
        <p>{book?.description}</p>
      </div>
      <div className="buttonContainer">
        {bookIndex !== 0 ? (
          <button onClick={decreaseIndex}>Previous</button>
        ) : (
          <div></div>
        )}
        {bookIndex !== 9 ? (
          <button onClick={increaseIndex}>Next</button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default TopTen;
