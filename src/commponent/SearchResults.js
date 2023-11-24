// SearchResults.js
import React from 'react';
import Book from './Book';

const SearchResults = ({ filteredBooks }) => {
  return (
    <div>
      <h2 className="heading1">Search Results</h2>
      <div className="booklist">
        {filteredBooks.map((book, index) => (
          <Book
            key={index}
            image={book.image}
            title={book.title}
            publisher={book.publisher}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
