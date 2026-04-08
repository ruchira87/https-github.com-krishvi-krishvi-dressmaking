import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import { productsQuery } from "../lib/queries";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        client.fetch(productsQuery).then((data) => {
            const featuredProducts = data.filter((product) => product.featured).slice(0, 3);
            setProducts(featuredProducts);
        });
    }, []);

    return (
        <>
            <section className="hero" id="home">
                <div className="container hero-grid">
                    <div className="hero-text-block">
                        <p className="eyebrow">Physical sewing patterns made simple</p>
                        <h1>Easy-to-use dressmaking patterns for women and children</h1>
                        <p className="hero-description">
                            Clear full-size physical sewing patterns with beginner-friendly
                            guidance, bespoke support, and no printing required.
                        </p>

                        <div className="hero-actions">
                            <Link to="/shop" className="btn">
                                Shop Patterns
                            </Link>

                            <Link to="/bespoke" className="btn btn-outline">
                                Bespoke Service
                            </Link>
                        </div>
                    </div>

                    <div className="hero-card">
                        <h3>Why choose Krishvi Dressmaking?</h3>
                        <ul>
                            <li>No printing or assembling needed</li>
                            <li>Physical patterns delivered by post</li>
                            <li>Made-to-measure support available</li>
                            <li>Designed to be clear and practical</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section" id="shop">
                <div className="container">
                    <h2 className="section-title">Featured Categories</h2>
                    <div className="card-grid">
                        <div className="card">
                            <h3>Children’s Patterns</h3>
                            <p>
                                Clear physical sewing patterns for ages 3–14, made for practical
                                home sewing.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Women’s Patterns</h3>
                            <p>
                                Dressmaking patterns designed for UK sizes 6–24 with clear
                                guidance and support.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Bespoke Service</h3>
                            <p>
                                Made-to-measure dressmaking support for customers who want a
                                more personal fit and custom guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section alt-section">
                <div className="container">
                    <h2 className="section-title">Featured Products</h2>

                    <div className="card-grid">
                        {products.map((product) => (
                            <div className="card" key={product._id}>
                                {product.image && (
                                    <img
                                        src={urlFor(product.image).width(600).height(400).url()}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                )}

                                <p className="product-category">{product.category}</p>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p className="product-price">£{product.price}</p>

                                <Link to={`/shop/${product.slug}`} className="btn small-btn">
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" id="about">
                <div className="container about-preview">
                    <div>
                        <p className="eyebrow">About the brand</p>
                        <h2 className="section-title">Designed to make sewing easier</h2>
                    </div>

                    <p className="about-text">
                        Krishvi Dressmaking creates physical sewing patterns for women and
                        children, with a focus on clarity, accessibility, and personal
                        support. The aim is to help beginners, home sewists, and families
                        enjoy sewing with less confusion and more confidence.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;

/*import { Link } from "react-router-dom";
import products from "../data/products";

function Home() {
    return (
        <>
            <section className="hero" id="home">
                <div className="container hero-grid">
                    <div className="hero-text-block">
                        <p className="eyebrow">Physical sewing patterns made simple</p>
                        <h1>Easy-to-use dressmaking patterns for women and children</h1>
                        <p className="hero-description">
                            Clear full-size physical sewing patterns with beginner-friendly
                            guidance, bespoke support, and no printing required.
                        </p>

                        <div className="hero-actions">
                            <Link to="/shop" className="btn">
                                Shop Patterns
                            </Link>

                            <Link to="/bespoke" className="btn btn-outline">
                                Bespoke Service
                            </Link>
                        </div>
                    </div>

                    <div className="hero-card">
                        <h3>Why choose Krishvi Dressmaking?</h3>
                        <ul>
                            <li>No printing or assembling needed</li>
                            <li>Physical patterns delivered by post</li>
                            <li>Made-to-measure support available</li>
                            <li>Designed to be clear and practical</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section" id="shop">
                <div className="container">
                    <h2 className="section-title">Featured Categories</h2>
                    <div className="card-grid">
                        <div className="card">
                            <h3>Children’s Patterns</h3>
                            <p>
                                Clear physical sewing patterns for ages 3–14, made for practical
                                home sewing.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Women’s Patterns</h3>
                            <p>
                                Dressmaking patterns designed for UK sizes 6–24 with clear
                                guidance and support.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Bespoke Service</h3>
                            <p>
                                Made-to-measure dressmaking support for customers who want a
                                more personal fit and custom guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section alt-section">
                <div className="container">
                    <h2 className="section-title">Featured Products</h2>
                    <div className="card-grid">
                        {products.map((product) => (
                            <div className="card" key={product.id}>
                                <p className="product-category">{product.category}</p>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p className="product-price">£{product.price}</p>

                                <Link to={`/shop/${product.id}`} className="btn small-btn">
                                    View Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" id="about">
                <div className="container about-preview">
                    <div>
                        <p className="eyebrow">About the brand</p>
                        <h2 className="section-title">Designed to make sewing easier</h2>
                    </div>

                    <p className="about-text">
                        Krishvi Dressmaking creates physical sewing patterns for women and
                        children, with a focus on clarity, accessibility, and personal
                        support. The aim is to help beginners, home sewists, and families
                        enjoy sewing with less confusion and more confidence.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Home;*/