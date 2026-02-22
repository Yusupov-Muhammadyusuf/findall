import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function PP() {
    const privacyPolicyData = [
        {
            title: "Information We Collect",
            intro: "We may collect the following types of information:",
            list: [
                "Personal information such as email address or username when you voluntarily provide it",
                "Usage data including pages visited, time spent, browser type, and device information",
                "Technical data such as IP address, cookies, and similar tracking technologies",
            ],
        },
        {
            title: "How We Use Your Information",
            intro: "We use the collected information to:",
            list: [
                "Provide and maintain the Platform",
                "Improve user experience and performance",
                "Monitor usage and detect technical issues",
                "Communicate with users when necessary",
                "Ensure platform security and prevent abuse",
            ],
        },
        {
            title: "APIs and Third-Party Services",
            content: "The Platform may contain links to third-party APIs, bots, or services. We do not control and are not responsible for the privacy practices of third-party providers. Users are encouraged to review the privacy policies of any third-party service they interact with.",
        },
        {
            title: "Cookies and Tracking Technologies",
            intro: "We may use cookies and similar tracking technologies to:",
            list: [
                "Remember user preferences",
                "Analyze traffic and usage patterns",
                "Improve overall platform functionality",
            ],
            footer: "You can control or disable cookies through your browser settings. Disabling cookies may affect some features of the Platform.",
        },
        {
            title: "Data Security",
            content: "We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
        },
        {
            title: "Data Retention",
            content: "We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required by law.",
        },
        {
            title: "Children’s Privacy",
            content: "The Platform is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children. If you believe that a child has provided us with personal data, please contact us immediately.",
        },
        {
            title: "Changes to This Privacy Policy",
            content: "We may update this Privacy Policy from time to time. Any changes will become effective immediately upon being posted on the Platform. Continued use of the Platform after updates constitutes acceptance of the revised policy.",
        },
        {
            title: "Contact Information",
            content: (
                <span>
                    If you have any questions about this Privacy Policy, please{" "}
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

            {/* About Privacy Policy */}
            <section className="container">
                <div style={{ marginTop: "100px" }}>

                    <div>
                        <h1 className="fw-bold">Privacy Policy</h1>
                        <p className="lead mt-3">
                            This Privacy Policy explains how
                            Findall (“we”, “our”, “the Platform”)
                            collects, uses, and protects your personal information
                            when you use our website.

                            By accessing or using the Platform,
                            you agree to the collection and use
                            of information in accordance with this Privacy Policy.
                        </p>
                    </div>

                    <div>
                        <ol>
                            {privacyPolicyData.map((item, index) => (
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
    )
}