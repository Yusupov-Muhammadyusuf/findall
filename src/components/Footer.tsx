import { Link } from "react-router-dom";

export function Footer() {
    const pageLinks = [
        { href: "/product", label: "Our services" },
        { href: "/contact", label: "Help center" },
        { href: "/faq", label: "FAQ" }
    ]

    const socialLinks = [
        { href: "https://t.me/Muhammadyusuf Yusupov", icon: "bi-telegram" },
        { href: "https://github.com/Yusupov-Muhammadyusuf", icon: "bi-github" },
        { href: "https://www.youtube.com", icon: "bi-youtube" },
        { href: "muhammadyusuf.yusupov201@gmail.com", icon: "bi-envelope" }
    ];

    const legalLinks = [
        { href: "/terms", label: "Terms of Service" },
        { href: "/privacy", label: "Privacy Policy" },
    ];

    return (
        <footer
            className='text-center border-top bg-light py-5'
            style={{ marginTop: "80px", height: "250px" }}
        >
            <div className="mt-1">
                <ul className="nav justify-content-center gap-2">
                    {pageLinks.map((link, index) => (
                        <li className="nav-item" key={index}>
                            <Link
                                to={link.href}
                                className="nav-link text-secondary"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <div className="d-flex justify-content-center">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="icon-link icon-link-hover text-dark fs-4 px-4"
                            style={{ ["--bs-icon-link-transform" as string]: "translate3d(0, -0.5rem, 0)" }}
                        >
                            <i className={`bi ${link.icon}`}></i>
                        </a>
                    ))}
                </div>

                <div className="mt-4">
                    {legalLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover text-dark mx-2"
                            style={{ fontSize: "13px" }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <p className="text-secondary mt-1" style={{ fontSize: "14px" }}>
                        © 2026 Findall. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
}