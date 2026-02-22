import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export function Navbar() {
    return (
        <>
            {/* Navbar */}
            <nav className={`navbar navbar-expand-lg fixed-top border-bottom border-2 bg-light ${styles.navbar}`}>

                <div className="container">
                    <Link className="navbar-brand" to="/homepage">
                        <img src="findall.png" alt="logo" style={{ height: "40px" }} />
                    </Link>
                    
                    <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse mt-sm-0 mt-3" id="navbarNav">
                        <ul className="navbar-nav offset-xl-7 fs-5 fw-bold gap-1">

                            <li className="nav-item">
                                <Link className="nav-link rounded-3" to="/product">
                                    Product
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link rounded-3" to="/contact">
                                    Contact Us
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link rounded-3" to="/faq">
                                    FAQ
                                </Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}