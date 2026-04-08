import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function SiteNavbar() {
    const { cart } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="navbar">
            <div className="container nav-inner">
                <Link to="/" className="logo" onClick={closeMenu}>
                    Krishvi Dressmaking
                </Link>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>

                <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
                    <Link to="/" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/shop" onClick={closeMenu}>
                        Shop
                    </Link>
                    <Link to="/bespoke" onClick={closeMenu}>
                        Bespoke
                    </Link>
                    <Link to="/about" onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/cart" onClick={closeMenu}>
                        Cart ({cartCount})
                    </Link>
                    <Link to="/contact" className="nav-btn" onClick={closeMenu}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default SiteNavbar;

/*import { Link } from "react-router-dom";
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

export default Navbar;*/