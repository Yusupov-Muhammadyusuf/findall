import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export function FAQ() {
    const faqCollapse = [
        {
            title: "What is this website and why is it useful?",
            content: `Our platform is a centralized directory of Web APIs 
              and Telegram bots designed for developers and 
              business owners. Here, you can find ready-made 
              solutions to enhance your projects.`
        },
        {
            title: "Is the website free to use?",
            content: `Browsing and searching through our catalog is 
              completely free. However, please note that some 
              APIs or bots may be offered on a paid basis 
              by their respective owners.`
        },
        {
            title: "Is it safe to use these APIs?",
            content: `While we verify all links, we strongly recommend 
              reviewing the API documentation and terms of 
              service before entering any sensitive information.`
        },
        {
            title: "How can I report an issue or get help?",
            content: `If you encounter any technical problems or have 
              questions, you can write to us directly on 
              our Support Page. Alternatively, you can message 
              our dedicated support bot for real-time assistance.`
        }
    ];

    return (
        <>

            <title>Findall | Frequently Asked Questions</title>

            <Navbar />

            {/* Accordion section */}
            <section className='container'>
                <div style={{ marginTop: "150px" }}>
                    {/* Text before Accordion */}
                    <div className="mb-5">
                        <h1 className="fw-bold display-5 mb-4" style={{ color: '#212529' }}>
                            Frequently Asked Queries!!
                        </h1>
                        <p className="text-muted fs-5 mb-2">
                            Consider the questions you are interested in.
                        </p>
                    </div>

                    <div className="row" id='minAccordion'>
                        <div className="accordion mt-2">

                            {faqCollapse.map((item, index) => (
                                <div className="accordion-item mb-4 border-0" key={index}>
                                    <h1 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent shadow-none"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded="false"
                                        >
                                            {item.title}
                                        </button>
                                    </h1>
                                    <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#minAccordion"
                                    >
                                        <div className="accordion-body text-muted">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>

            {/* Texts */}
            <section className="container">
                <div className="text-center" style={{ marginTop: "130px" }}>

                    <div>
                        <h1 className="display-4 fw-bold">Are you interested?</h1>
                        <p className="lead">Let's find those 'Big Three' tools. Feel free to ask any questions!</p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center flex-column flex-md-row">
                        <h6
                            className="btn btn-dark border rounded-2 p-2 mt-2"
                            style={{ cursor: "text", minWidth: "150px" }}
                        >
                            Any questions
                        </h6>

                        <span
                            className="d-none d-sm-block border-start ms-2 me-2"
                            style={{ height: "40px" }}>
                        </span>

                        <Link
                            to="/contact"
                            className="btn btn-outline-dark border border-secondary rounded-2 p-2"
                            style={{ minWidth: "150px" }}
                        >
                            Contact us
                        </Link>
                    </div>

                </div>
            </section>

            <Footer />

        </>
    );
}