export const addToCart = (book, cartItems, setCartItems) => {
  const existingItem = cartItems.find((item) => item.id === book.id);

  if (existingItem) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  } else {
    const randomPrice = (Math.random() * (50 - 10) + 10).toFixed(2);
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      {
        id: book.id,
        title: book.title,
        price: randomPrice,
        quantity: 1,
        image: book.image,
      },
    ]);
  }
};


export const removeCartItem = (id) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== id);
  setCartItems(updatedCartItems);
};