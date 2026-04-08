import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { client, urlFor } from "../lib/sanity";
import { productBySlugQuery } from "../lib/queries";

function ProductDetail() {
    const { slug } = useParams();
    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        client.fetch(productBySlugQuery, { slug }).then((data) => {
            setProduct(data);
        });
    }, [slug]);

    function handleAddToCart() {
        addToCart({
            id: product._id,
            name: product.name,
            category: product.category,
            price: product.price,
            image: product.image
                ? urlFor(product.image).width(600).height(400).url()
                : "",
            description: product.description,
            details: product.details,
        });

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    }

    if (!product) {
        return (
            <main className="page-section">
                <div className="container">
                    <h1 className="page-title">Loading product...</h1>
                </div>
            </main>
        );
    }

    return (
        <>
            {showMessage && (
                <div className="toast-message">Item added to basket successfully.</div>
            )}

            <main className="page-section">
                <div className="container">
                    <div className="product-detail">
                        <div className="product-detail-image-wrap">
                            {product.image && (
                                <img
                                    src={urlFor(product.image).width(800).height(800).url()}
                                    alt={product.name}
                                    className="product-detail-image"
                                />
                            )}
                        </div>

                        <div className="product-detail-content">
                            <p className="product-category">{product.category}</p>
                            <h1 className="page-title">{product.name}</h1>
                            <p className="price">£{product.price}</p>
                            <p className="page-intro">{product.description}</p>
                            <p>{product.details}</p>

                            <div className="hero-actions">
                                <button className="btn" onClick={handleAddToCart}>
                                    Add to Basket
                                </button>

                                <Link to="/contact" className="btn btn-outline">
                                    Ask a Question
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductDetail;