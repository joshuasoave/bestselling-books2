import React, { useEffect } from "react";
import { useState } from "react";

//this is gonna be where you pass in fantasy or sci fi or whatever
//based on what is passed in, it will call the appropriate API
//and then display the top 10 books

const TopTen = ({ allBooks }) => {
  const [topTen, setTopTen] = useState([]);
  console.log(allBooks, "allBooks");
  console.log(topTen, "topTen");

  useEffect(() => {
    const checkBooks = () => {
      if (allBooks.length > 0) {
        const topTenBooks = allBooks?.slice(0, 10);
        setTopTen(topTenBooks);
      }
    };

    checkBooks();
  }, [allBooks]);

  return (
    <div>
      <div>
        {topTen.map((book, index) => {
          return (
            <div className="bookContainer" key={index}>
              <h5 className="bookTitle">{book.title}</h5>
              <p className="bookAuthor">{book.author}</p>
              <img
                className="bookCover"
                src={book.book_image}
                alt={book.title}
              />
              <p className="bookDescription">{book.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopTen;
