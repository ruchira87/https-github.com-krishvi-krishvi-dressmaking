import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
    const { cart, clearCart } = useContext(CartContext);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [status, setStatus] = useState("");

    const total = cart.reduce(
        (sum, item) => sum + Number(item.price) * item.quantity,
        0
    );

    const orderSummary = cart
        .map(
            (item) =>
                `${item.name} | Qty: ${item.quantity} | Price: £${item.price} | Subtotal: £${(
                    Number(item.price) * item.quantity
                ).toFixed(2)}`
        )
        .join("\n");

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        formData.append("orderSummary", orderSummary);
        formData.append("orderTotal", `£${total.toFixed(2)}`);

        try {
            const response = await fetch("https://formspree.io/f/mbdpbjeq", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("SUCCESS");
                setOrderPlaced(true);
                clearCart();
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    }

    if (cart.length === 0 && !orderPlaced) {
        return (
            <main className="page-section">
                <div className="container">
                    <h1 className="page-title">Checkout</h1>
                    <div className="card">
                        <p className="page-intro">
                            Your basket is empty. Please add items before checkout.
                        </p>
                        <Link to="/shop" className="btn">
                            Go to Shop
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    if (orderPlaced) {
        return (
            <main className="page-section">
                <div className="container">
                    <div className="card center-box">
                        <h1 className="page-title">Thank you for your order</h1>
                        <p className="page-intro">
                            Your order has been sent successfully.
                        </p>
                        <Link to="/shop" className="btn">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="page-section">
            <div className="container">
                <h1 className="page-title">Checkout</h1>

                <div className="checkout-layout">
                    <form className="checkout-form card" onSubmit={handleSubmit}>
                        <h2>Customer Details</h2>

                        <label>
                            Full Name
                            <input type="text" name="name" required />
                        </label>

                        <label>
                            Email Address
                            <input type="email" name="email" required />
                        </label>

                        <label>
                            Phone Number
                            <input type="tel" name="phone" />
                        </label>

                        <label>
                            Address
                            <textarea name="address" rows="4" required></textarea>
                        </label>

                        <button type="submit" className="btn">
                            Place Order
                        </button>

                        {status === "ERROR" && (
                            <p className="form-error">
                                Sorry, something went wrong. Please try again.
                            </p>
                        )}
                    </form>

                    <div className="checkout-summary card">
                        <h2>Order Summary</h2>

                        <div className="checkout-items">
                            {cart.map((item) => (
                                <div className="checkout-item" key={item.id}>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>
                                            Qty: {item.quantity} × £{item.price}
                                        </p>
                                    </div>
                                    <p>£{(item.quantity * Number(item.price)).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>

                        <hr className="checkout-divider" />

                        <p className="checkout-total">Total: £{total.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Checkout;