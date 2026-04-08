import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
        useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
    );

    return (
        <main className="page-section">
            <div className="container">
                <h1 className="page-title">Your Basket</h1>

                {cart.length === 0 ? (
                    <div className="card">
                        <p className="page-intro">Your basket is currently empty.</p>
                        <Link to="/shop" className="btn">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="cart-list">
                            {cart.map((item) => (
                                <div className="cart-item card" key={item.id}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="cart-item-image"
                                    />

                                    <div className="cart-item-details">
                                        <p className="product-category">{item.category}</p>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                        <p className="price">£{item.price}</p>

                                        <div className="quantity-controls">
                                            <button
                                                className="qty-btn"
                                                onClick={() => decreaseQuantity(item.id)}
                                            >
                                                -
                                            </button>

                                            <span className="quantity-number">{item.quantity}</span>

                                            <button
                                                className="qty-btn"
                                                onClick={() => increaseQuantity(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        className="btn btn-outline"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-summary card">
                            <h2>Order Summary</h2>
                            <p className="price">Total: £{total.toFixed(2)}</p>

                            <div className="hero-actions">
                                <Link to="/checkout" className="btn">
                                    Checkout
                                </Link>
                                <Link to="/shop" className="btn btn-outline">
                                    Continue Shopping
                                </Link>
                            </div>
                            <button className="btn btn-outline" onClick={clearCart}>
                                Clear Basket
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

export default Cart;