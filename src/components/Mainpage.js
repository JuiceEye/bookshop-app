import "../css/mainpage.css"
import { removeCartItem, addToCart as addToCartFunction } from './Cart';
import { Carousel } from 'react-bootstrap';
import Book from './Book';
import CartItem from './CartItem';
import { fetchBooks } from './api';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBooks();
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, []);

    const addToCart = (book) => {
        addToCartFunction(book, cartItems, (newCartItems) => {
            console.log("New Cart Items:", newCartItems);
            setCartItems(newCartItems);
        });
    };

    return (
        <div>
            <script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.7/dist/umd/popper.min.js"
                integrity="sha384-MCw98/SFnGE8fJT3PKJ1wOE1dwcbI4mQD5Tp5fx9BgOMWrC5rVfa1DDPLIcY6Uq6"
                crossOrigin="anonymous"
            ></script>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
                integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
                crossOrigin="anonymous"
            ></script>
            <div className="banner">
                <div className="whitebg">
                </div>
                <img src="icons/girl.png" className="girl" />
                <div className="text">
                    <h3>BACK TO SCHOOL</h3>
                    <h1>SPECIAL 50% OFF FOR OUR STUDENT COMMUNITY</h1>
                </div>
            </div>


            <Carousel id="carouselExampleIndicators" className="mb-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="slider1.jpg"
                        alt="Slide 1"
                        style={{ height: '216px', objectFit: 'cover', objectPosition: 'center' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="slider2.jpg"
                        alt="Slide 2"
                        style={{ height: '216px', objectFit: 'cover', objectPosition: 'center' }}
                    />
                </Carousel.Item>
            </Carousel>

            <ul className="belt">
                {books.map((book) => (
                    <Book key={book.id} {...book} addToCart={() => addToCart(book)} />
                ))}
            </ul>


            <h1 className="title">CART</h1>

            {/* <div className="title-items">
            <div className="cart-text-row">
                <div className="title-column">
                    <p>ITEM</p> 
                </div>
                <div className="title-column">
                    <p>PRICE</p> 
                </div><div className="title-column">
                    <p>QUANTITY</p> 
                </div>
            </div>


            <div className="cart-item-row" id="cart-1">
                <div className="cart-item cart-column">
                    <img className="cart-img" src="books/dandelionwine.jpg" />
                    <p>Dandelion Wine</p>
                </div>
                <div className="cart-price cart-column">
                    <p>14.99$</p>
                </div>
                <div className="cart-quantity cart-column">
                    <p>1</p>
                    <div className="remove-button btn-danger" onClick={() => removeCartItem("1")}>Remove</div>
                </div>
            </div>

            <div className="cart-item-row" id="cart-2">
                <div className="cart-item cart-column">
                    <img className="cart-img" src="books/fahrenheit451.jpg" />
                    <p>Fahrenheit 451</p>
                </div>
                <div className="cart-price cart-column">
                    <p>24.99$</p>
                </div>
                <div className="cart-quantity cart-column">
                    <p>1</p>
                    <div className="remove-button btn-danger" onClick={() => removeCartItem("2")}>Remove</div>
                </div>
            </div>
            
            <div className="cart-item-row" id="cart-3">
                <div className="cart-item cart-column">
                    <img className="cart-img" src="books/fnaf.jpg" />
                    <p>The Silver Eyes</p>
                </div>
                <div className="cart-price cart-column">
                    <p>19.99$</p>
                </div>
                <div className="cart-quantity cart-column">
                    <p>1</p>
                    <div className="remove-button btn-danger" onClick={() => removeCartItem("3")}>Remove</div>
                </div>
            </div>

            <div className="cart-item-row" id="cart-4">
                <div className="cart-item cart-column">
                    <img className="cart-img" src="books/harrypotter.jpg" /> 
                    <p>Harry Potter</p>
                </div>
                <div className="cart-price cart-column">
                    <p>29.99$</p>
                </div>
                <div className="cart-quantity cart-column">
                    <p>1</p>
                    <div className="remove-button btn-danger" onClick={() => removeCartItem("4")}>Remove</div>
                </div>
            </div>

            <div className="cart-item-row" id="cart-5">
                <div className="cart-item cart-column">
                    <img className="cart-img" src="books/mydarlinggirl.jpg" />
                    <p>My Darling Girl</p>
                </div>
                <div className="cart-price cart-column">
                    <p>14.99$</p>
                </div>
                <div className="cart-quantity cart-column">
                    <p>1</p>
                    <div className="remove-button btn-danger" onClick={() => removeCartItem("5")}>Remove</div>
                </div>
            </div>

            <div className="cart-item-row" id="cart-6">
                <div className="cart-item cart-column">
                    <img className="cart-img" src="books/urban.jpg" />
                    <p>Urban Planning</p>
                </div>
                <div className="cart-price cart-column">
                    <p>29.99$</p>
                </div>
                <div className="cart-quantity cart-column">
                    <p>1</p>
                    <div className="remove-button btn-danger" onClick={() => removeCartItem("6")}>Remove</div>
                </div>
            </div>
        </div>        */}
            <div className="title-items">
                {cartItems.map((cartItem) => (
                    <CartItem
                        key={cartItem.id}
                        id={cartItem.id}
                        title={cartItem.title}
                        price={cartItem.price}
                        quantity={cartItem.quantity}
                        image={cartItem.image}
                        removeCartItem={removeCartItem}
                    />
                ))}
            </div>

            <footer>
                <p>For any questions feel free to contact me:</p>
                <p>Email: farukhiminov@gmail.com</p>
                <p>Contact Phone: +7(777)-777-77-77</p>
            </footer>
        </div>
    );
};

export default MainPage;