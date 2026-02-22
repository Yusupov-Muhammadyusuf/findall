import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import './Contact.css';

export function Contact() {
    const [count, setCount] = useState({ message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCount({ message: e.target.value });
    };

    const getWordCount = (text: string) =>
        text.trim() ? text.trim().split(/\s+/).length : 0;

    const getLineCount = (text: string) => text ? text.split("\n").length : 0;

    return (
        <>

            <title>Findall | Contact Us</title>

            <Navbar />

            <header className="d-flex justify-content-around" style={{ marginTop: "150px" }}>

                {/* Texts */}
                <div className="item-1 d-sm-block d-none mt-5">
                    <div>
                        <h1 className="display-4 text-secondary">Contact Us</h1>
                        <p className="mt-2 text-secondary">
                            Email us or complete the form to learn how<br />
                            Findall can solve your messaging issues.
                        </p>
                    </div>

                    <div className="mt-5" style={{ width: "20rem" }}>
                        <p className="item-2 fs-5 text-dark">
                            If you have questions about our platform,
                            need help finding the right Web API or bot,
                            or want to discuss a partnership,
                            feel free to reach out to us.

                            Our team supports developers, startups,
                            and businesses of all sizes.
                        </p>
                        <Link
                            to="/faq"
                            className="btn btn-primary mt-2"
                        >
                            Frequently Asked Questions
                        </Link>
                    </div>
                </div>

                {/* Form */}
                <form action="https://formsubmit.co/muhammadyusuf.yusupov201@gmail.com" method="post">
                    <div className="item-3 border rounded-4 p-4">
                        <div>
                            <h1 className="text-lg-start text-center">Get in Touch</h1>
                            <p className="text-lg-start text-center">You can reach us anytime</p>
                        </div>

                        <div className="row gap-sm-0 gap-3" style={{ marginTop: "7%" }}>
                            {/* First name */}
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="first_name"
                                    id="firstName"
                                    className="form-control rounded-4 py-3"
                                    placeholder="First name"
                                    required
                                />
                            </div>

                            {/* Last name */}
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    name="last_name"
                                    id="lastName"
                                    className="form-control rounded-4 py-3"
                                    placeholder="Last name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mt-sm-3 mt-5">
                            <div className="input-group">
                                <span className="input-group-text fs-5 rounded-start-4">
                                    <i className="bi bi-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control rounded-end-4"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                        </div>

                        {/* Textarea */}
                        <div className="position-relative mt-3">
                            <textarea
                                name="message"
                                rows={5}
                                className="form-control rounded-4 py-3"
                                placeholder="How can we help?"
                                value={count.message}
                                onChange={handleChange}
                                required
                            />
                            <div
                                className="position-absolute text-muted mt-1"
                                style={{ bottom: "10px", right: "16px" }}
                            >
                                {getLineCount(count.message)}:{getWordCount(count.message)}
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-5 mt-3 p-2">
                            Submit
                        </button>

                        <p className="text-center text-secondary mt-3">
                            By contacting us, you agree to our
                            <Link
                                to="/terms"
                                className="link-dark link-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-dark ms-1"
                            >
                                Terms<br /> of service
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy"
                                className="link-dark link-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-dark"
                            >
                                Privacy Policy
                            </Link>
                        </p>

                    </div>
                </form>
            </header>

            <Footer />
        </>
    );
}