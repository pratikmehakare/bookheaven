import React from "react";
import Book from "./Book";
import "./BookList.css";
const book1 = {
  image: "https://m.media-amazon.com/images/I/4189XrRHhsL.AC_SX250.jpg",
  title: "Doglapan",
  publisher: "Ashneer Grover",
  price: "199",
};
const book2 = {
  image:
    "https://m.media-amazon.com/images/I/51xL7Qn-6+L._AC_UF226,226_FMjpg_.jpg",
  title: "Sachin@50",
  publisher: "Sachin Tendulkar",
  price: "299",
};
const book3 = {
  image: "https://m.media-amazon.com/images/I/514fD3oqIFL.AC_SX250.jpg",
  title: "You Can",
  publisher: " George Matthew Adams",
  price: "99",
};
const book4 = {
  image: "https://m.media-amazon.com/images/I/51sYkmGihuL.AC_SX250.jpg",
  title: "Dairy of Void",
  publisher: "Emi Yagi",
  price: "549",
};
const book5 = {
  image: "https://m.media-amazon.com/images/I/71gtWVKJ7kL._AC._SR360,460.jpg",
  title: "A Girl to Remember",
  publisher: "Ajay K Pandey",
  price: "172",
};

const book6 = {
    image: "https://m.media-amazon.com/images/I/5197qo6Q1GL._AC_UY327_FMwebp_QL65_.jpg",
    title: "C++ ",
    publisher: "Bjarne Stroustrup ",
    price: "1010",
  };
  const book7 = {
    image:
      "https://m.media-amazon.com/images/I/71AF8eZ5A5L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Java",
    publisher: "Herbert Schildt ",
    price: "1418",
  };
  const book8 = {
    image: "https://m.media-amazon.com/images/I/71xVWN7st9L._AC_UY327_FMwebp_QL65_.jpg",
    title: "JavaScript",
    publisher: " David Flanagan ",
    price: "2150",
  };
  const book9 = {
    image: "https://m.media-amazon.com/images/I/51EyrsWbMGL._AC_UY327_FMwebp_QL65_.jpg",
    title: "React",
    publisher: "Robin Wieruch ",
    price: "2520",
  };
  const book10 = {
    image: "https://m.media-amazon.com/images/I/71rRviHwKML._AC_UY327_FMwebp_QL65_.jpg",
    title: "SQL",
    publisher: "Alan Beaulieu",
    price: "1475",
  };

  const book11 = {
    image: "https://m.media-amazon.com/images/I/810IZGFxfFL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Superman",
    publisher: " Grant Morrison",
    price: "1339",
  };
  const book12 = {
    image:
      "https://m.media-amazon.com/images/I/91BTZdo8jIL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Spider-Man",
    publisher: "Donny Cates ",
    price: "299",
  };
  const book13 = {
    image: "https://m.media-amazon.com/images/I/91cyJhyr6CL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Avengers",
    publisher: " Jason Aaron, Gerry Duggan",
    price: "99",
  };
  const book14 = {
    image: "https://m.media-amazon.com/images/I/81fg9-E5b1L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Avatar",
    publisher: "J. Torres, Bryan Evans",
    price: "549",
  };
  const book15 = {
    image: "https://m.media-amazon.com/images/I/71pRNTIyhGL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Tinkle",
    publisher: "Multiple Writers, Multiple Artists, et al.",
    price: "172",
  };
  
  const BookList = ({ searchQuery }) => {
    const filteredBooks = [
        book1, book2, book3, book4, book5,
        book6, book7, book8, book9, book10,
        book11, book12, book13, book14, book15,
    ].filter(
      (book) =>
        !searchQuery ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div>
        <div>
          <h2 className="heading1">New Arrivals</h2>
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
  
        {/* Remaining sections... */}
      </div>
    );
  };
  
export default BookList;








// // import React from "react";
// // import Book from "./Book";
// // import "./BookList.css";
// // const book1 = {
// //   image: "https://m.media-amazon.com/images/I/4189XrRHhsL.AC_SX250.jpg",
// //   title: "Doglapan",
// //   publisher: "Ashneer Grover",
// //   price: "199",
// // };
// // const book2 = {
// //   image:
// //     "https://m.media-amazon.com/images/I/51xL7Qn-6+L._AC_UF226,226_FMjpg_.jpg",
// //   title: "Sachin@50",
// //   publisher: "Sachin Tendulkar",
// //   price: "299",
// // };
// // const book3 = {
// //   image: "https://m.media-amazon.com/images/I/514fD3oqIFL.AC_SX250.jpg",
// //   title: "You Can",
// //   publisher: " George Matthew Adams",
// //   price: "99",
// // };
// // const book4 = {
// //   image: "https://m.media-amazon.com/images/I/51sYkmGihuL.AC_SX250.jpg",
// //   title: "Dairy of Void",
// //   publisher: "Emi Yagi",
// //   price: "549",
// // };
// // const book5 = {
// //   image: "https://m.media-amazon.com/images/I/71gtWVKJ7kL._AC._SR360,460.jpg",
// //   title: "A Girl to Remember",
// //   publisher: "Ajay K Pandey",
// //   price: "172",
// // };

// // const book6 = {
// //     image: "https://m.media-amazon.com/images/I/5197qo6Q1GL._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "C++ ",
// //     publisher: "Bjarne Stroustrup ",
// //     price: "1010",
// //   };
// //   const book7 = {
// //     image:
// //       "https://m.media-amazon.com/images/I/71AF8eZ5A5L._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "Java",
// //     publisher: "Herbert Schildt ",
// //     price: "1418",
// //   };
// //   const book8 = {
// //     image: "https://m.media-amazon.com/images/I/71xVWN7st9L._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "JavaScript",
// //     publisher: " David Flanagan ",
// //     price: "2150",
// //   };
// //   const book9 = {
// //     image: "https://m.media-amazon.com/images/I/51EyrsWbMGL._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "React",
// //     publisher: "Robin Wieruch ",
// //     price: "2520",
// //   };
// //   const book10 = {
// //     image: "https://m.media-amazon.com/images/I/71rRviHwKML._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "SQL",
// //     publisher: "Alan Beaulieu",
// //     price: "1475",
// //   };

// //   const book11 = {
// //     image: "https://m.media-amazon.com/images/I/810IZGFxfFL._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "Superman",
// //     publisher: " Grant Morrison",
// //     price: "1339",
// //   };
// //   const book12 = {
// //     image:
// //       "https://m.media-amazon.com/images/I/91BTZdo8jIL._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "Spider-Man",
// //     publisher: "Donny Cates ",
// //     price: "299",
// //   };
// //   const book13 = {
// //     image: "https://m.media-amazon.com/images/I/91cyJhyr6CL._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "Avengers",
// //     publisher: " Jason Aaron, Gerry Duggan",
// //     price: "99",
// //   };
// //   const book14 = {
// //     image: "https://m.media-amazon.com/images/I/81fg9-E5b1L._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "Avatar",
// //     publisher: "J. Torres, Bryan Evans",
// //     price: "549",
// //   };
// //   const book15 = {
// //     image: "https://m.media-amazon.com/images/I/71pRNTIyhGL._AC_UY327_FMwebp_QL65_.jpg",
// //     title: "Tinkle",
// //     publisher: "Multiple Writers, Multiple Artists, et al.",
// //     price: "172",
// //   };
  
// // const BookList = () => {
// //   return (

    
// //     <div>

    
    
// //     <div>
// //       <h2 className="heading1">New Arrivals</h2>
// //       <div className="booklist">
// //         <Book
// //           image={book1.image}
// //           title={book1.title}
// //           publisher={book1.publisher}
// //           price={book1.price}
// //         />
// //         <Book
// //           image={book2.image}
// //           title={book2.title}
// //           publisher={book2.publisher}
// //           price={book2.price}
// //         />
// //         <Book
// //           image={book3.image}
// //           title={book3.title}
// //           publisher={book3.publisher}
// //           price={book3.price}
// //         />
// //         <Book
// //           image={book4.image}
// //           title={book4.title}
// //           publisher={book4.publisher}
// //           price={book4.price}
// //         />
// //         <Book
// //           image={book5.image}
// //           title={book5.title}
// //           publisher={book5.publisher}
// //           price={book5.price}
// //         />
// //       </div>
// //     </div>

// //     <div className="set2">
// //       <h2 className="heading2" >Computer Sicence</h2>
// //       <div className="booklist">
// //         <Book
// //           image={book6.image}
// //           title={book6.title}
// //           publisher={book6.publisher}
// //           price={book6.price}
// //         />
// //         <Book
// //           image={book7.image}
// //           title={book7.title}
// //           publisher={book7.publisher}
// //           price={book7.price}
// //         />
// //         <Book
// //           image={book8.image}
// //           title={book8.title}
// //           publisher={book8.publisher}
// //           price={book8.price}
// //         />
// //         <Book
// //           image={book9.image}
// //           title={book9.title}
// //           publisher={book9.publisher}
// //           price={book9.price}
// //         />
// //         <Book
// //           image={book10.image}
// //           title={book10.title}
// //           publisher={book10.publisher}
// //           price={book10.price}
// //         />
// //       </div>
// //     </div>

// //     <div className="set3">
// //       <h2 className="heading3"> Comics</h2>
// //       <div className="booklist">
// //         <Book
// //           image={book11.image}
// //           title={book11.title}
// //           publisher={book11.publisher}
// //           price={book11.price}
// //         />
// //         <Book
// //           image={book12.image}
// //           title={book12.title}
// //           publisher={book12.publisher}
// //           price={book12.price}
// //         />
// //         <Book
// //           image={book13.image}
// //           title={book13.title}
// //           publisher={book13.publisher}
// //           price={book13.price}
// //         />
// //         <Book
// //           image={book14.image}
// //           title={book14.title}
// //           publisher={book14.publisher}
// //           price={book14.price}
// //         />
// //         <Book
// //           image={book15.image}
// //           title={book15.title}
// //           publisher={book15.publisher}
// //           price={book15.price}
// //         />
// //       </div>
// //     </div>
// //     </div>

    
   
// //   );
// // };
// // export default BookList;
