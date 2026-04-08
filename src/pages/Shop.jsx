import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../lib/sanity";
import { productsQuery } from "../lib/queries";

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        client.fetch(productsQuery).then((data) => {
            setProducts(data);
        });
    }, []);

    return (
        <main className="page-section">
            <div className="container">
                <h1 className="page-title">Shop Sewing Patterns</h1>
                <p className="page-intro">
                    Browse our collection of sewing patterns designed for makers who love
                    beautiful, practical garments.
                </p>

                <div className="product-grid">
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
                            <p className="price">£{product.price}</p>

                            <Link to={`/shop/${product.slug}`} className="btn small-btn">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Shop;