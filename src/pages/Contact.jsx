import { useState } from "react";

function Contact() {
    const [status, setStatus] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mnjorazj", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    }

    return (
        <main className="page-section">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-intro">
                    Have a question about patterns, bespoke orders, or sewing support?
                    We'd love to hear from you.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input type="text" name="name" placeholder="Your name" required />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                        />
                    </label>

                    <label>
                        Message
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write your message here"
                            required
                        ></textarea>
                    </label>

                    <button type="submit" className="btn-primary">
                        Send Message
                    </button>

                    {status === "SUCCESS" && (
                        <p className="form-success">
                            Thank you! Your message has been sent successfully.
                        </p>
                    )}

                    {status === "ERROR" && (
                        <p className="form-error">
                            Sorry, something went wrong. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}

export default Contact;


/*function Contact() {
    return (
        <main className="page-section">
            <div className="container">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-intro">
                    Have a question about patterns, bespoke orders, or sewing support?
                    We'd love to hear from you.
                </p>

                <form className="contact-form">
                    <label>
                        Name
                        <input type="text" name="name" placeholder="Your name" />
                    </label>

                    <label>
                        Email
                        <input type="email" name="email" placeholder="Your email" />
                    </label>

                    <label>
                        Message
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write your message here"
                        ></textarea>
                    </label>

                    <button type="submit" className="btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Contact;*/