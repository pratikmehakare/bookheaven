import CarouselPage from "./commponent/CarouselPage";
import BookList from "./commponent/BookList";
import Footer from "./commponent/Footer";
import Navbar from "./commponent/Navbar";
import React, { useState } from "react";

const App = () => {
  //  for search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  //-----------
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <CarouselPage />
      <BookList searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;
