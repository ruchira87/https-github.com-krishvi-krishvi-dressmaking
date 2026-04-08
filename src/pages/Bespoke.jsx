import { Link } from "react-router-dom";

function Bespoke() {
    return (
        <main className="page-section">
            <div className="container">
                <p className="eyebrow">Made-to-measure support</p>
                <h1 className="page-title">Bespoke Dressmaking Service</h1>
                <p className="page-intro">
                    Our bespoke service is for customers who want a more personal fit,
                    custom guidance, or a made-to-measure sewing solution.
                </p>

                <div className="card-grid">
                    <div className="card">
                        <h3>What is bespoke?</h3>
                        <p>
                            Bespoke means made especially for you. This can include
                            made-to-measure garments, custom sewing advice, and more personal
                            support based on your needs.
                        </p>
                    </div>

                    <div className="card">
                        <h3>Who is it for?</h3>
                        <p>
                            This service is ideal for customers who want a better fit, need
                            extra help with sizing, or would like something more personalised
                            than a standard sewing pattern.
                        </p>
                    </div>

                    <div className="card">
                        <h3>How it works</h3>
                        <p>
                            You contact us with your requirements, measurements, and ideas.
                            We then discuss the best option and guide you through the next
                            steps.
                        </p>
                    </div>
                </div>

                <section className="section">
                    <div className="card">
                        <h2 className="section-title">What we can help with</h2>
                        <ul className="bespoke-list">
                            <li>Made-to-measure garment support</li>
                            <li>Custom sizing guidance</li>
                            <li>Personal sewing advice</li>
                            <li>Bespoke dressmaking enquiries</li>
                            <li>Special occasion or unique design requests</li>
                        </ul>
                    </div>
                </section>

                <section className="section">
                    <div className="card center-box">
                        <h2 className="section-title">Ready to enquire?</h2>
                        <p className="cta-text">
                            If you would like to discuss a bespoke order or made-to-measure
                            service, please get in touch and we will be happy to help.
                        </p>

                        <Link to="/contact" className="btn">
                            Contact Us
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Bespoke;