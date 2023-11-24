//rafce
import React from 'react'
import "./Book.css";
const Book = (props) => {
return (
    <div className='book'>

       {console.log(props)}

      <div className='book-img'>
        <img src={props.image} alt="bookImage"/>
      </div>

      <div className='book-info'> 
        <h2>{props.title}</h2>
        <p className='book-author'>By {props.publisher}</p>
        <p className='book-price'>${props.price}</p>
        <button>Add To Cart</button>
      </div>

    </div>
  )
}
export default Book
