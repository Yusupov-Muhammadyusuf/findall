import { useEffect, useRef } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import rocket from '../../assets/images/rocket.png'
import tickIcon from '../../assets/tick_icons/icons8-tick-144.png';
import './HomePage.css';

export function HomePage() {
    const openButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (openButtonRef.current) {
            openButtonRef.current.click();
        }
    }, []);

    const upInfoTexts = [
        {
            icon: "bi-globe",
            title: "Extensive Web API Library",
            content: `Explore a vast collection of powerful 
             Web APIs to integrate seamless 
             functionality into your applications.`
        },
        {
            icon: "bi-robot",
            title: "Smart Bot Directory",
            content: `Find the best automated Telegram 
             and service bots to enhance your 
             workflow and business automation.`
        },
        {
            icon: "bi-cloud",
            title: "Scalable Cloud Solutions",
            content: `Access high-performance cloud tools 
             and infrastructure APIs designed 
             to scale your projects effortlessly.`
        }
    ];

    const downInfoTexts = [
        {
            icon: "bi-question-diamond",
            title: "Support Team",
            content: `Get instant answers to your technical 
             questions with our comprehensive 
             guides and dedicated support system.`
        },
        {
            icon: "bi-people-fill",
            title: "Developer Community",
            content: `Join a growing network of developers 
             to share insights, tools, and 
             collaborate on innovative solutions.`
        }
    ];

    const firstLists = [
        { image: tickIcon, text: "Real-time tool verification" },
        { image: tickIcon, text: "Fast search by functionality" },
        { image: tickIcon, text: "Direct links to developers" }
    ]

    const secondLists = [
        { image: tickIcon, text: "Powerful Web APIs" },
        { image: tickIcon, text: "Smart Telegram Bots" },
        { image: tickIcon, text: "Ready-to-use tools" }
    ]

    return (
        <>

            <title>Findall</title>

            <Navbar />

            {/* Modal */}
            <button
                ref={openButtonRef}
                type="button"
                className="d-none"
                data-bs-toggle="modal"
                data-bs-target="#staticFloatingModal"
            ></button>

            <div
                className="modal fade d-sm-block d-none"
                id="staticFloatingModal"
                data-bs-backdrop="false"
                data-bs-keyboard="false"
            >

                <div className="modal-dialog">
                    <div className="modal-content border-0">

                        {/* Header */}
                        <div className="modal-header border-0 mt-2">
                            <img src="all.png" alt="logo" style={{ width: "8%" }} />
                            <p
                                className='modal-title text-secondary ms-2'
                                style={{ fontSize: "13px" }}>
                                FINDALL
                            </p>
                            <button
                                type="button"
                                className="btn-close btn-close-dark shadow-none"
                                style={{ fontSize: "13px" }}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>

                        {/* Body */}
                        <div className="modal-body p-3">
                            <h6>Find tools via our extension</h6>
                            <p className="small mb-0 text-muted">
                                Get instant notifications when new tools are added.
                            </p>
                            <a
                                href="#"
                                className='
                                btn btn-outline-primary
                                text-decoration-none
                                border-2 border-primary
                                rounded-5 mt-3
                                '>
                                Add to Browser
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Welcome section */}
            <section>
                <div style={{ marginTop: "130px" }}>
                    <h1 className="text-center fw-bold" style={{ lineHeight: "1.05em" }}>
                        Find The Tools You Need<br />
                        In Just A Few Minutes
                        <span className="ms-3 text-warning">
                            <i className="bi bi-lightning-fill"></i>
                        </span>
                    </h1>

                    <p className="box text-center mt-4" style={{ letterSpacing: "0.02em" }}>
                        Discover a curated collection of powerful Web APIs
                        and versatile bots. Streamline<br></br> your development
                        process and find the perfect tools for your
                        next big project today.
                    </p>
                </div>

                <div className="text-center" style={{ marginTop: "130px" }}>
                    <h4 className='fs-3'>What you will find in here</h4>
                    <p className='box mt-3'>
                        Explore the wide range of powerful tools waiting for you inside
                        <img
                            src={rocket}
                            alt="rocket"
                            className='ms-2'
                            style={{ width: "30px" }}
                        />
                    </p>
                </div>
            </section>

            {/* Card section */}
            <section className='container'>
                {/* Card line */}
                <div
                    className="d-flex justify-content-center flex-column flex-md-row align-items-center"
                    style={{ marginTop: "50px" }}
                >

                    {upInfoTexts.map((item, index) => (
                        <div className="col-md-1 text-center w-25 mx-5" key={index}>
                            <i className={`bi ${item.icon} text-secondary fs-4`}></i>
                            <h6 className="fw-normal mt-4" style={{ fontSize: "18px" }}>
                                {item.title}
                            </h6>
                            <p className="text-secondary mt-3">
                                {item.content}
                            </p>
                        </div>
                    ))}

                </div>

                <div className="d-flex justify-content-center align-items-center flex-column flex-md-row mt-sm-5">

                    {downInfoTexts.map((item, index) => (
                        <div className="col-md-1 text-center w-25 mx-5" key={index}>
                            <i className={`bi ${item.icon} text-secondary fs-4`}></i>
                            <h6 className="fw-normal mt-4" style={{ fontSize: "18px" }}>
                                {item.title}
                            </h6>
                            <p className="text-secondary mt-3">
                                {item.content}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* Float section */}
            <section className="container p-5">
                <div
                    className="row"
                    style={{ marginTop: "75px" }}
                >

                    <div className="col-12 col-md-5 offset-md-1">
                        <img src="unDraw.png" className="img-fluid rounded-5" style={{ width: "360px" }} />
                    </div>

                    <div className="move col-12 col-md-5 d-flex flex-column">
                        <h1 className='center fw-normal'>Find what you need, faster.</h1>
                        <p className='center'>
                            Access powerful APIs and bots to grow your projects faster.
                        </p>

                        <ul className="list-unstyled d-sm-block d-none">
                            {firstLists.map((list, index) => (
                                <li className="mb-2" key={index}>
                                    <img src={list.image}
                                        alt="tickIcon"
                                        className='me-2'
                                        style={{ width: "35px" }}
                                    />
                                    {list.text}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Next side */}
                    <div className="move row align-items-center">
                        <div className="col-12 col-md-5 offset-md-1 order-2 order-md-1 d-flex flex-column justify-content-center mt-2">
                            <h1 className='center fw-normal'>Explore Resources.</h1>
                            <p className='center'>
                                Verified tools for your next big idea in one place.
                            </p>

                            <ul className="list-unstyled d-sm-block d-none">
                                {secondLists.map((list, index) => (
                                    <li className="mb-2" key={index}>
                                        <img src={list.image}
                                            alt="tickIcon"
                                            className='me-2'
                                            style={{ width: "35px" }}
                                        />
                                        {list.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-12 col-md-5 order-1 order-md-2 mb-4">
                            <img src="unDraw2.png" className="img-fluid rounded-5" style={{ width: "360px" }} />
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    );
}