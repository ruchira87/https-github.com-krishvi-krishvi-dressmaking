import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
    const { cart } = useContext(CartContext);
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="navbar">
            <div className="container nav-inner">
                <h2 className="logo">Krishvi Dressmaking</h2>

                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/bespoke">Bespoke</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact" className="nav-btn">
                        Contact
                    </Link>

                    <Link to="/cart">Cart ({cartCount})</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;