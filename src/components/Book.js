import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author, image, addToCart }) => (
  <div className="book">
    <img src={image} alt={title} />
    <div className="book-info">
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
    <div className="add-button" onClick={() => addToCart(id)}>
      Add to cart
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Book;