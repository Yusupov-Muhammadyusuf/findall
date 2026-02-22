import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function TAC() {
    const termsData = [
        {
            title: "Purpose of the Platform",
            content: "Findall is an informational platform that allows users to discover, browse, and explore various web APIs, bots, and related technological solutions. The Platform provides information only and does not directly own, operate, or provide third-party services listed on the Site.",
        },
        {
            title: "User Responsibilities",
            intro: "By using the Platform, you agree that you will:",
            list: [
                "Not engage in any unlawful or prohibited activities",
                "Not publish or distribute harmful, misleading, false, or illegal content",
                "Not violate the rights of other users or third parties",
                "Not interfere with or attempt to disrupt the technical operation of the Platform",
            ],
        },
        {
            title: "APIs and Bots Disclaimer",
            intro: "The APIs and bots listed on the Platform may be owned and operated by third-party providers. We do not guarantee or assume responsibility for:",
            list: [
                "The availability or functionality of any API or bot",
                "The security or reliability of third-party services",
                "The accuracy or timeliness of the provided information",
            ],
            footer: "Users are solely responsible for reviewing and complying with the terms, policies, and licenses of any third-party API or bot before using it.",
        },
        {
            title: "Intellectual Property Rights",
            content: "All content on the Platform, including but not limited to text, design, logos, and visual elements, is the property of Findall and is protected by applicable intellectual property laws. Unauthorized reproduction, distribution, or commercial use is strictly prohibited.",
        },
        {
            title: "Limitation of Liability",
            intro: "The Platform is provided on an “as is” and “as available” basis. To the maximum extent permitted by law, we shall not be liable for:",
            list: [
                "Technical failures or service interruptions",
                "Data loss or system errors",
                "Not violate the rights of other users or third parties",
                "Any damages resulting from the use of third-party services",
            ],
        },
        {
            title: "Account Suspension or Termination",
            intro: "We reserve the right, at our sole discretion, to suspend or terminate user access if we believe that these Terms have been violated, including but not limited to:",
            list: [
                "Temporary suspension of an account",
                "Permanent termination of an account",
                "Restriction or removal of access to the Platform",
            ],
        },
        {
            title: "Changes to These Terms",
            content: "We may update or modify these Terms at any time. Any changes will become effective immediately upon being posted on the Platform. Continued use of the Platform constitutes acceptance of the revised Terms.",
        },
        {
            title: "Contact Information",
            content: (
                <span>
                    If you have any questions regarding these Terms, please{" "}
                    <Link to="/contact" className="link-secondary link-offset-2 link-underline-opacity-100 text-secondary fw-normal">
                        contact us
                    </Link>{" "}
                    through our website.
                </span>
            )
        },
    ];

    return (
        <>

            <title>FindAll | Terms and Conditions</title>

            <Navbar />

            {/* About terms of service */}
            <section className="container">
                <div style={{ marginTop: "100px" }}>

                    <div>
                        <h1 className="fw-bold">Terms of Service</h1>
                        <p className="lead mt-3">
                            These Terms of Service govern your access to and use of Findall.
                            (“we”, “our”, “the Platform”, “the Site”)
                            By accessing or using the Platform,
                            you agree to be bound by these Terms.
                            If you do not agree to these Terms,
                            please do not use the Platform.
                        </p>
                    </div>

                    <div>
                        <ol>
                            {termsData.map((item, index) => (
                                <li key={index}>
                                    <h5 className="fw-normal mt-5 ms-1">{item.title}</h5>

                                    {item.content && (
                                        <p className="text-secondary fs-5 mt-3">{item.content}</p>
                                    )}

                                    {item.intro && (
                                        <p className="text-secondary fs-5 mt-3">{item.intro}</p>
                                    )}

                                    {item.list && (
                                        <ul className="text-secondary" style={{ fontSize: "18px" }}>
                                            {item.list.map((li, index) => (
                                                <li key={index}>{li}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {item.footer && (
                                        <p className="text-secondary fs-5 mt-5">{item.footer}</p>
                                    )}

                                </li>
                            ))}
                        </ol>
                    </div>

                </div>
            </section>

            <Footer />

        </>
    );
}