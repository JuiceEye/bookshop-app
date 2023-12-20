import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ id, title, price, quantity, image, removeCartItem }) => (
    <div className="cart-item-row">
        <div className="cart-item cart-column">
            <img className="cart-img" src={image} alt={title} />
            <p>{title}</p>
        </div>
        <div className="cart-price cart-column">
            <p>{price}</p>
        </div>
        <div className="cart-quantity cart-column">
            <p>{quantity}</p>
            <div
                className="remove-button btn-danger"
                onClick={() => removeCartItem(id)}
            >
                Remove
            </div>
        </div>
    </div>
);

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    removeCartItem: PropTypes.func.isRequired,
};

export default CartItem;
